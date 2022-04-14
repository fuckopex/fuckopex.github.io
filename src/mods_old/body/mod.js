class Mod {
	
	name = 'Body';
	type = 'U';
	title = 'Body.render()';
	desc = '';

	async render ( obj, apd ) {

		document.body.replaceWith( document.createElement( 'body' ) );

		if ( obj == undefined ) return;

		if ( typeof obj == 'string' ) apd = await fetch( obj )
			.then( r => r.text() )
			.then( t => document.createRange().createContextualFragment( t ) );

		if ( obj instanceof HTMLElement ) apd = obj;

		document.body.append( apd );

	}

}

export default new Mod;