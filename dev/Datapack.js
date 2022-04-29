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

	async loadSrc ( src, target, urls ) {

		src = 'http://localhost:9090/';
		target = 'https://fuckopex.github.io/';
		//target = 'http://localhost:9090/';

		urls = ( await this.getFiles( '../src/' ) )
			.map( f => src + f.split( path.sep ).join( path.posix.sep ).replace( '../', '' ) );
		urls.push( src );

		return Promise.all( urls.map( u => fetch( u ).then( r => this.resps.push( ( r.s = src, r.t = target, r ) ) ) ) );

	}

	async loadTnk ( src, srcR, srcT, jsR, jsT, cssR ) {

		src = 'https://tankionline.com/play/';
		srcR = await fetch( src );
		srcT = await srcR.clone().text();

		jsR = await fetch( src + 'static/js/' + srcT.match( /main\.[0-9a-f]{8}\.js/ ) );
		jsT = await jsR.clone().text();

		cssR = await fetch( src + 'static/css/' + srcT.match( /main\.[0-9a-f]{8}\.css/ ) );

		this.resps.push( srcR, jsR, cssR );

		return Promise.all( Array.from( jsT.matchAll( /"(static\/.+?)"/g ) )
			.map( m => fetch( src + m[1] ).then( r => this.resps.push( r ) ).catch(e=>console.log(e)) ) );

	}

	async pack ( pack, url, type, ab, size, ws ) {

		for ( let resp of this.resps ) {
			
			url 	= resp.t ? resp.url.replace( resp.s, resp.t ) : resp.url;
			type 	= resp.headers.get( 'content-type' );
			ab 		= new Uint8Array( await resp.arrayBuffer() );
			size 	= ab.length;

			this.meta.push( { url, type, size } );
			this.data.push( ab );

		}

		this.data.unshift( Buffer.from( JSON.stringify( this.meta ) ) );

		await fs.writeFile( '../app/' + pack + '.pkg', Buffer.concat( this.data ) );

	}

	async launch ( pack ) {

		pack = process.argv[2];

		if ( pack == 'entry' )
			await this.loadSrc();

		if ( pack == 'tanki' )
			await this.loadTnk();

		if ( pack )
			await this.pack( pack );

	}

}

( new Datapack ).launch()
