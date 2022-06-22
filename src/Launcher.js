import Mods from '/src/Mods.js';

class Launcher {

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

	async launch ( el = {} ) {

		await document.body.render( '/src/assets/launcher.html' );

		for ( let selector of [ 'list', 'viewer', 'title', 'label', 'desc', 'launch' ] )
			
			el[ selector ] = document.querySelector( `[mod-${ selector }]` );


		await Mods.init();

		for ( let mod of Object.values( Mods ) ) {

			el.mod = document.createElement( 'div' );
			el.mod.setAttribute( 'mod', '' );
			el.mod.setAttribute( 'mod-type', mod.type );
			el.mod.textContent = mod.title;
			el.mod.addEventListener( 'pointerup', e => {

				if ( e.button !== 0 ) return;

				el.viewer.setAttribute( 'mod-type', mod.type );
				el.title.textContent = mod.title;
				el.label.textContent = `[${ mod.type }]`;
				el.desc.textContent = mod.desc;
				el.launch.textContent = 'Запуск ->';
				el.launch.onpointerup = e => {

					if ( e.button !== 0 ) return;

					document.title = mod.title;
					document.body.render();
					
					mod.launch?.();

				}

			});

			el.list.append( el.mod );

		}

	}

	constructor () {

		this.init();
		this.launch();

	}

}

export default new Launcher;