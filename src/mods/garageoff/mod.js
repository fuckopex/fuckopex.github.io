import Mods from '/src/Mods.js';

class Mod {

	name = 'GarageOff';
	type = 'S';
	title = 'Пустой гараж';
	desc = 'описание придумать';

	use () {

		Mods.Replacer.use( [

			[ /27565450061130\/.+?\.webp/, 	'/src/mods/garageoff/null.webp' ],
			[ /27565450061130\/object.3ds/, '/src/mods/garageoff/view.3ds' ],

		]);

	}

	launch () {

		this.use();
		
		Mods.Tanki.use();

	}

}

export default new Mod;