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

	async launch ( viewer, div ) {

		await Mods.init();

		await document.body.render( '/src/assets/entry.html' );

		viewer = {
			self: 	document.querySelector( '[viewer]' ),
			title: 	document.querySelector( '[viewer-title]' ),
			desc: 	document.querySelector( '[viewer-desc]' ),
			launch: document.querySelector( '[viewer-launch]' ),
		}

		for ( let mod of Object.values( Mods ) ) {

			div = document.createElement( 'div' );
			div.setAttribute( 'mod', '' );
			div.setAttribute( 'mod-type', mod.type );
			div.textContent = mod.title;
			div.addEventListener( 'pointerup', event => {

				if ( event.button !== 0 ) return;

				viewer.self.setAttribute( 'mod-type', mod.type );
				viewer.title.textContent = `${ mod.title } (${ mod.name })`;
				viewer.desc.textContent = mod.desc;
				viewer.launch.textContent = 'Запуск ->';
				viewer.launch.onpointerup = event => {

					if ( event.button !== 0 ) return;

					document.title = mod.title;
					document.body.render();
					
					mod.launch?.();

				}

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