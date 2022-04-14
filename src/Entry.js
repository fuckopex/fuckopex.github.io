import Mods from '/src/Mods.js';

class Entry {

	init () {

		HTMLBodyElement.prototype.render = async function ( obj, fragment ) {

			document.body.replaceWith( document.createElement( 'body' ) );

			if ( obj === undefined ) return;

			if ( typeof obj === 'string' ) fragment = await fetch( obj )
				.then( r => r.text() )
				.then( t => document.createRange().createContextualFragment( t ) );

			if ( obj instanceof HTMLElement ) fragment = obj;

			document.body.append( fragment );

		}

	}

	async launch ( div ) {

		await Mods.init();

		await document.body.render( '/src/assets/entry.html' );

		for ( let mod of Object.values( Mods ) ) {

			div = document.querySelector( 'template' ).content.cloneNode( true );

			div.querySelector( '[mod-type]' ).setAttribute( 'mod-type', mod.type );
			div.querySelector( '[mod-title]' ).textContent = mod.title;
			div.querySelector( '[mod-desc]' ).textContent = mod.desc;
			div.querySelector( '[mod-launch]' ).addEventListener( 'pointerup', event => {

				if ( event.button !== 0 ) return;

				document.title = mod.title;
				document.body.render();
				
				mod.launch?.();

			});

			document.querySelector( '[mods]' ).append( div );

		}

	}

	constructor () {

		this.init();
		this.launch();

	}

}

export default new Entry;