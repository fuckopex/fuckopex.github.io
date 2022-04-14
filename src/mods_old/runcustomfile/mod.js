import Mods from '/src/Mods.js';

class Mod {
	
	name = 'RunCustomFile';
	type = 'U';
	title = 'Запуск main.js';
	desc = 'описание';

	js = '';

	async init () {

		this.js = await fetch( '/src/mods/runcustomfile/main.js.txt' ).then( r => r.text() );

	}

	use () {

		Mods.Tanki.js = 'console.log(2)'//this.js;

	}

	launch () {

		this.use();

		Mods.Tanki.use();

	}

}

export default new Mod;