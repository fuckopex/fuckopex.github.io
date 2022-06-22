class IMCache {

	constructor () {
		
		this.responses = {};
		this.active = false;
		this.ready = new Promise( ( r => this.resolve = r ).bind( this ) );

		this.load();

	}

	async load ( packs, resp, ui8, nb, len, meta, data ) {

		packs = await new Promise( r =>

			indexedDB.open( 'datapacks' ).onsuccess = e => r( e.target.result.objectStoreNames )

		);
		
		for ( let pack of packs ) {

			resp = await this.update( pack );
			ui8 = new Uint8Array( await resp.arrayBuffer() );


			nb = new Array( 256 ).fill( 0 );

			for ( len = 0; len <= ui8.length; len++ )
				if ( nb[ ui8[ len ] ]++, nb[ 91 ] == nb[ 93 ] )
					break;

			
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


self.imc = new IMCache();

self.addEventListener( 'install', e => self.skipWaiting() );

self.addEventListener( 'activate', e => clients.claim() );

self.addEventListener( 'fetch', e => {

	let url = e.request.url;

	if ( imc.active )

		imc.match( url ) && e.respondWith( imc.response );

	else

		e.respondWith( imc.ready.then( () => 

			imc.match( url ) ? imc.response : fetch( url, { cache: 'no-store' } )

		));

});