class Mod {

	name = 'DebugMJS';
	type = 'D';
	title = 'Отладить main.js';
	desc = 'Отладочный запуск танкового main.js из файла';


	async open ( handle, reader ) {

		handle = await window.showOpenFilePicker();
		this.js = await new Promise( async resolve => {

			reader = new FileReader();
			reader.readAsText( await handle[0].getFile() );
			reader.onload = () => resolve( reader.result );

		});

	}

	async launch () {

		await this.open();
		
		Mods.Tanki.js = this.js;
		Mods.Tanki.use();

	}

}