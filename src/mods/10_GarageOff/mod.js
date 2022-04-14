import Mods from '/src/Mods.js';

const dir = import.meta.url.replace( '/mod.js', '' );

class Mod {

	name = 'GarageOff';
	type = 'T';
	title = 'Пустой гараж';
	desc = 'описание придумать';

	use () {

		Mods.ResReplace.use(

			[ /27565450061130\/.+?\.webp/, 	`${ dir }/null.webp` ],
			[ /27565450061130\/object.3ds/, `${ dir }/view.3ds` ],

		);

	}

	launch () {

		this.use();
		
		Mods.Tanki.use();

	}

}

export default new Mod;