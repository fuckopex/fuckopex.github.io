class Datapack {

	static async use ( config, meta, data, resp, type, ui8, size ) {

		meta = [];
		data = [];

		for ( let url of config.urls ) {

			resp = await fetch( url );
			type = resp.headers.get( 'content-type' );
			ui8  = new Uint8Array( await resp.arrayBuffer() );
			size = ui8.length;

			meta.push( {
				url: url.replace( config.src, config.target ),
				type,
				size
			});
			data.push( ui8 );

		}

		data.unshift( new TextEncoder().encode( JSON.stringify( meta ) ) );


		let merge = new Uint8Array( data.reduce( ( len, ui8 ) => len += ui8.length, 0 ) );

		for ( let i = 0, offset = 0; i < data.length; i++ )
			merge.set( data[ i ], offset += data[ i - 1 ]?.length ?? 0 );


		await Deno.writeFile( `../app/${ config.pack }.pack`, merge );

	}

}

export default Datapack;