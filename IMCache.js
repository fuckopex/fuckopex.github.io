class IMCache {

	constructor () {
		
		this.packs = [ 'entry', 'tanki' ];
		this.responses = {};
		this.active = false;
		this.ready = new Promise( ( r => this.resolve = r ).bind( this ) );

		this.load();

	}

	async load ( pack, ab, len, meta, data ) {

		for ( let name of this.packs ) {

			pack = await this.update( name );

			ab = new Uint8Array( await pack.arrayBuffer() );
			len = ab.indexOf( 0x5D );
			meta = JSON.parse( new TextDecoder().decode( ab.subarray( 0, len + 1 ) ) );
			data = ab.subarray( len + 1, ab.length );

			meta.reduce( ( begin, file, end, blob ) => {

				end = begin + file.size;
				blob = new Blob( [ data.subarray( begin, end ) ], { type: file.type } );
				this.responses[ file.url ] = new Response( blob );

				return end;

			}, 0 );

		}

		this.active = true;
		this.resolve();

	}

	async update ( name, cache, url, req, stag, ctag ) {

		cache = 'datapacks';
		url = '/app/' + name + '.pkg';
		req = new Request( url );

		stag = ( await fetch( url, { method: 'HEAD', cache: 'no-store' } ) ).headers.get( 'etag' );
		ctag = ( await caches.match( req ) )?.headers.get( 'etag' );

		if ( ctag != stag )

			await caches.open( cache ).then( async c => c.put( req, await fetch( url, { cache: 'no-store' } ) ) );

		return await caches.match( req );

	}

	match ( url ) {
		
		this.response = this.responses[ url ]?.clone();

		return this.response ? true : false;

	}

}


self.imc = new IMCache;

self.addEventListener( 'install', event => self.skipWaiting() );

self.addEventListener( 'activate', event => clients.claim() );

self.addEventListener( 'fetch', ( event, url ) => {

	url = event.request.url;

	//if ( url == `${ self.origin }/` ) imc.init();

	if ( imc.active )

		imc.match( url ) && event.respondWith( imc.response );

	else

		event.respondWith( imc.ready.then( () =>

			( imc.match( url ), imc.response || fetch( url, { cache: 'no-store' } ) ) ) );

});