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

	async launch ( mods, viewer, title, desc, launch, div ) {

		await Mods.init();

		await document.body.render( '/src/assets/entry.html' );

		mods 	= document.querySelector( '[mods]' );
		viewer 	= document.querySelector( '[mod-viewer]' );
		title 	= document.querySelector( '[mod-title]' );
		desc 	= document.querySelector( '[mod-desc]' );
		launch 	= document.querySelector( '[mod-launch]' );

		for ( let mod of Object.values( Mods ) ) {

			div = document.createElement( 'div' );
			div.setAttribute( 'mod', '' );
			div.setAttribute( 'mod-type', mod.type );
			div.textContent = mod.title;
			div.addEventListener( 'pointerup', event => {

				if ( event.button !== 0 ) return;

				viewer.setAttribute( 'mod-type', mod.type );
				title.textContent = mod.title;
				desc.textContent = mod.desc;
				launch.textContent = 'Запуск ->';
				launch.onpointerup = event => {

					if ( event.button !== 0 ) return;

					document.title = mod.title;
					document.body.render();
					
					mod.launch?.();

				}

			});

			mods.append( div );

		}

	}

	constructor () {

		this.init();
		this.launch();

	}

}

export default new Entry;