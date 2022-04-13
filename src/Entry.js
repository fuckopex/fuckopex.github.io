import Mods from '/src/Mods.js';

class Entry {

	constructor () {

		this.launch();

	}

	async launch ( tmpl, mods, div ) {

		await Mods.launch();

		await Mods.Body.render( '/src/assets/entry.html' );

		tmpl = document.querySelector( 'template' );
		mods = document.querySelector( '[mods]' );

		for ( let mod of Object.values( Mods ).filter( m => m.launch ) ) {

			div = tmpl.content.cloneNode( true );

			div.querySelector( '[mod-type]' ).setAttribute( 'mod-type', mod.type );
			div.querySelector( '[mod-title]' ).textContent = mod.title;
			div.querySelector( '[mod-desc]' ).textContent = mod.desc;
			div.querySelector( '[mod-launch]' ).addEventListener( 'pointerup', ( event => {

				if ( event.button !== 0 ) return;

				document.title = mod.title;
				Mods.Body.render();
				
				mod.launch();

			}).bind( this ));

			mods.append( div );

		}

	}

}

export default new Entry;