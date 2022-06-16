class IMCache {

	constructor ( packs ) {
		
		this.packs = packs;
		this.responses = {};
		this.active = false;
		this.ready = new Promise( ( r => this.resolve = r ).bind( this ) );

		this.load();

	}

	async load ( resp, ui8, nb, len, meta, data ) {

		for ( let pack of this.packs ) {

			resp = await this.update( pack );
			ui8 = new Uint8Array( await resp.arrayBuffer() );

			nb = new Array( 256 ).fill( 0 );
			for ( len = 0; len <= ui8.length; len++ )
			if ( nb[ ui8[ len ] ]++, nb[ 91 ] == nb[ 93 ] ) break;
			

			meta = JSON.parse( new TextDecoder().decode( ui8.subarray( 0, len + 1 ) ) );
			data = ui8.subarray( len + 1, ui8.length );

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

	async update ( pack, cache, url, req, stag, ctag ) {

		cache = 'datapacks';
		url = '/app/' + pack + '.pack';
		req = new Request( url );

		stag = ( await fetch( url, { method: 'HEAD', cache: 'no-store' } ) ).headers.get( 'etag' );
		ctag = ( await caches.match( req ) )?.headers.get( 'etag' );

		if ( ctag !== stag )

			await caches.open( cache ).then( async c => c.put( req, await fetch( url, { cache: 'no-store' } ) ) );

		return await caches.match( req );

	}

	match ( url ) {
		
		return ( this.response = this.responses[ url ]?.clone() ) ? true : false;

	}

}


self.imc = new IMCache( [ 'entry', 'tanki' ] );

self.addEventListener( 'install', event => self.skipWaiting() );

self.addEventListener( 'activate', event => clients.claim() );

self.addEventListener( 'fetch', event => {

	let url = event.request.url;

	if ( imc.active )

		imc.match( url ) && event.respondWith( imc.response );

	else

		event.respondWith( imc.ready.then( () => 

			imc.match( url ) ? imc.response : fetch( url, { cache: 'no-store' } )

		));

});