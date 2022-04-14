import Mods from '/src/Mods.js';

class Mod {

	name = 'BeautyMJS';
	type = 'U';
	title = 'Main.js для редактора';
	desc = 'Сохраняет main.js в читабельном формате';


	async init () {

		await import( './beautifier.js' );

	}

	async launch () {

		await this.beautify();
		await this.render();

	}

	async beautify () {

		this.js = beautifier.js( Mods.Tanki.js, { indent_with_tabs: true } );

	}

	async render ( a ) {

		a = document.createElement( 'a' );
		a.textContent = 'Сохранить main.js.txt';
		a.href = '#';
		a.style = 'font-size: 150%;';
		a.addEventListener( 'pointerup', ( event => {

			if ( event.button !== 0 ) return;

			this.save();

		}).bind( this ) );

		document.body.append( a );

	}

	async save ( handle, stream, blob, link ) {

		handle = await window.showSaveFilePicker( {
			suggestedName: 'main.js.txt'
		});
		stream = await handle.createWritable();

		await stream.write( new Blob( [ this.js ], { type: 'text/plain' } ) );
		await stream.close();

	}

}

export default new Mod;