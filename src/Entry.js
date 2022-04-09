import Block from '/src/Block.js';
import Mods from '/src/Mods.js';

class Entry extends Block {

	constructor () {

		super(); this.launch();

	}

	async launch ( tmpl, mods, div ) {
		
		await this.render( '/src/assets/entry-view.html' );

		tmpl = document.querySelector( 'template' );
		mods = document.querySelector( '[mods]' );

		for ( let mod in Mods ) {

			mod = Mods[mod];

			div = tmpl.content.cloneNode( true );

			div.querySelector( '[mod-type]' ).setAttribute( 'mod-type', mod.type );
			div.querySelector( '[mod-name]' ).textContent = mod.name;
			div.querySelector( '[mod-desc]' ).textContent = mod.desc;
			div.querySelector( '[mod-launch]' ).addEventListener( 'pointerup', ( script => {

				document.title = mod.name;
				this.render();
				mod.launch();

			}).bind( this ));

			mods.append( div );

		}

	}

}

export default new Entry;