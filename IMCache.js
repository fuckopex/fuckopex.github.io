
const rwoc = ( url, init = {} ) => ( init.cache = 'no-store', fetch( url, init ) );

class IMCache {

	constructor () {
		
		this.init();

	}

	init () {

		this.resps = {};
		this.active = false;
		this.ready = new Promise( ( r => this.resolve = r ).bind( this ) );

		this.load();

	}

	async load ( pack, ab, ml, meta, data ) {

		pack = await this.update();

		ab = new Uint8Array( await pack.arrayBuffer() );
		ml = ab.indexOf( 0x5D );
		meta = JSON.parse( new TextDecoder().decode( ab.subarray( 0, ml + 1 ) ) );
		data = ab.subarray( ml + 1, ab.length );

		meta.reduce( ( begin, file, end, blob ) => {

			end = begin + file.size;
			blob = new Blob( [ data.subarray( begin, end ) ], { type: file.type } );
			this.resps[ file.url ] = new Response( blob );

			return end;

		}, 0 );


		this.active = true;
		this.resolve();

	}

	async update ( cn, pn, rp, st, ct ) {

		cn = 'datapacks';
		pn = '/app/datapack';
		rp = new Request( pn );

		st = ( await rwoc( pn, { method: 'HEAD' } ) ).headers.get( 'etag' );
		ct = ( await caches.match( rp ) )?.headers.get( 'etag' );

		if ( ct != st )

			await caches.open( cn ).then( async c => c.put( rp, await rwoc( pn ) ) );

		return await caches.match( rp );

	}

	match ( url ) {
		
		this.response = this.resps[ url ]?.clone();

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

			( imc.match( url ), imc.response || rwoc( url ) ) ) );

});