import Mods from '/src/Mods.js';

class Entry {

	constructor () {

		window.render = async function ( obj, apd ) {

			document.body.replaceWith( document.createElement( 'body' ) );

			if ( obj == undefined ) return;

			if ( typeof obj == "string" ) apd = await fetch( obj )
				.then( r => r.text() )
				.then( t => document.createRange().createContextualFragment( t ) );

			if ( obj instanceof HTMLElement ) apd = obj;

			document.body.append( apd );

		}

		this.launch();

	}

	async launch ( tmpl, mods, div ) {

		await Mods.launch();

		await render( '/src/assets/entry.html' );

		tmpl = document.querySelector( 'template' );
		mods = document.querySelector( '[mods]' );

		for ( let mod of Object.values( Mods ).filter( m => m.launch ) ) {

			div = tmpl.content.cloneNode( true );

			div.querySelector( '[mod-type]' ).setAttribute( 'mod-type', mod.type );
			div.querySelector( '[mod-name]' ).textContent = mod.name;
			div.querySelector( '[mod-desc]' ).textContent = mod.desc;
			div.querySelector( '[mod-launch]' ).addEventListener( 'pointerup', ( event => {

				if ( event.button !== 0 ) return;

				document.title = mod.name;
				render();
				
				mod.launch();

			}).bind( this ));

			mods.append( div );

		}

	}

}

export default new Entry;