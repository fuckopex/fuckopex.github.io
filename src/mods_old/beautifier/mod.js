import Mods from '/src/Mods.js';

class Mod {
	
	name = 'Beautifier';
	type = 'U';
	title = 'Красивый main.js';
	desc = 'описание';

	async init () {

		await import( '/src/mods/beautifier/beautifier.js' );

	}

	use ( js, blob, link ) {

		js = beautifier.js( Mods.Tanki.js, { indent_with_tabs: true } );
		blob = new Blob( [ js ], { type: 'text/plain' } );
		link = document.createElement( 'a' );
		link.setAttribute( 'href', URL.createObjectURL( blob ) );
		link.setAttribute( 'download', 'main.js.txt' );
		link.click();

	}

	launch () {

		this.use();

	}

}

export default new Mod;