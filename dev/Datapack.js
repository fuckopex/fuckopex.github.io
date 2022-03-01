const fs = require( 'fs/promises' );
const path = require( 'path' );

class Datapack {

	constructor () {

		this.resps = [];
		this.meta = [];
		this.data = [];

	}

	async getFiles ( dir, files ) {

		files = await fs.readdir( dir );

		files = await Promise.all( files.map( async ( file, p, s ) => {
			p = path.join( dir, file );
			s = await fs.stat( p );
			return s.isDirectory() ? this.getFiles( p ) : ( s.isFile() ? p : null );
		}));

		return files.reduce( ( all, fc ) => all.concat( fc ), [] );
	}

	async loadSrc ( base, src, urls ) {

		base = 'http://localhost:8080/';

		urls = ( await this.getFiles( '../src/' ) )
			.map( f => base + f.split( path.sep ).join( path.posix.sep ).replace( '../', '' ) );
		urls.push( base );

		return Promise.all( urls.map( u => fetch( u ).then( r => this.resps.push( r ) ) ) );

	}

	async loadTnk ( base, baseR, baseT, jsR, jsT, cssR ) {

		base = 'https://tankionline.com/play/';
		baseR = await fetch( base );
		baseT = await baseR.clone().text();

		jsR = await fetch( base + 'static/js/' + baseT.match( /main\.[0-9a-f]{8}\.js/ ) );
		jsT = await jsR.clone().text();

		cssR = await fetch( base + 'static/css/' + baseT.match( /main\.[0-9a-f]{8}\.css/ ) );

		this.resps.push( baseR, jsR, cssR );

		return Promise.all( Array.from( jsT.matchAll( /"(static\/.+?)"/g ) )
			.map( m => fetch( base + m[1] ).then( r => this.resps.push( r ) ).catch(e=>console.log(e)) ) );

	}

	async pack ( pack, url, type, ab, size, ws ) {

		for ( let resp of this.resps ) {
			
			url 	= resp.url
			type 	= resp.headers.get( 'content-type' );
			ab 		= new Uint8Array( await resp.arrayBuffer() );
			size 	= ab.length;

			this.meta.push( { url, type, size } );
			this.data.push( ab );

		}

		this.data.unshift( Buffer.from( JSON.stringify( this.meta ) ) );

		await fs.writeFile( '../app/datapack-' + pack, Buffer.concat( this.data ) );

	}

	async launch ( pack ) {

		pack = process.argv[2];

		if ( pack == 'src' )
			await this.loadSrc();

		if ( pack == 'tnk' )
			await this.loadTnk();

		if ( pack )
			await this.pack( pack );

	}

}

( new Datapack ).launch()
