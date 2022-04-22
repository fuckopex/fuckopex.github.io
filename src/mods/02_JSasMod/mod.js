class Mod {

	name = 'JSasMod';
	type = 'U';
	title = 'Мод из файла';
	desc = 'Запускает выбранный js-файл как мод';

	js = '';

	async use ( js ) {

		if ( js )
			this.js = js;
		else
			await this.open();

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

	run ( blob, url ) {

		blob = new Blob( [ this.js ], { type: 'application/javascript' } );
		url = URL.createObjectURL( blob );

		Mods.load( url ).then( mod => mod.launch?.() );

	}

}