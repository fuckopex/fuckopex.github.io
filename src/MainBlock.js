import Block 		from '/src/Block.js';
import ModBlock 	from '/src/ModBlock.js';

class MainBlock extends Block {

	async view () {
		
		return { url: '/src/Main/view.html' };

	}

	async init ( mods, div ) {

		const VIEW 		= await this.view;
		const TEMPLATE 	= VIEW.querySelector( 'template' );
		const MODS 		= VIEW.querySelector( 'div[mods]' );
		

		mods = await fetch( '/src/Main/mods.json' ).then( r => r.json() );

		for ( let mod of mods ) {

			div = TEMPLATE.content.cloneNode( true );

			div.querySelector( 'div[mod-type]' ).setAttribute( 'mod-type', mod.type );
			div.querySelector( 'div[mod-name]' ).textContent = mod.name;
			div.querySelector( 'div[mod-desc]' ).textContent = mod.desc;
			div.querySelector( 'div[mod-launch]' ).addEventListener( 'click', async () => {

				await ModBlock.init( mod );
				await ModBlock.render();
				await ModBlock.launch();

			});

			MODS.append( div );

		}

	}

}

export default new MainBlock();