import Mods from '/src/Mods.js';

class Mod {

	name = 'JSasMod';
	type = 'U';
	title = 'Запуск <file>.js';
	desc = 'Запуск любого файла в качестве js-модуля';

	js = '';

	async use ( js ) {

		if ( js ) this.js = js;
		
		else await this.open();

		this.run();

	}

	launch () {
		
		this.use();

	}

	async open ( handle, reader ) {

		handle = await window.showOpenFilePicker();
		this.js = await new Promise( async resolve => {

			reader = new FileReader();
			reader.readAsText( await handle[0].getFile() );
			reader.onload = () => resolve( reader.result );

		});

	}

	run ( blob, script ) {

		blob = new Blob( [ this.js ], { type: 'application/javascript' } );

		script = document.createElement( 'script' );
		script.type = 'module';
		script.src = URL.createObjectURL( blob );

		document.body.append( script );

	}

}

export default new Mod;