class Block {

	async render ( obj ) {

		document.body.replaceWith( document.createElement( 'body' ) );

		if ( obj )
			document.body.append( obj instanceof HTMLElement
				? obj
				: await fetch( obj )
					.then( r => r.text() )
					.then( t => document.createRange().createContextualFragment( t ) )
			);

	}
	
}

export default Block;