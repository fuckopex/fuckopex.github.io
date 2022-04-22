class Mod {

	name = 'GarageOff';
	type = 'T';
	title = 'Пустой гараж';
	desc = 'описание придумать';

	use () {

		Mods.ResReplace.use(

			[ /27565450061130\/.+?\.webp/, 	`${ this.pwd }/null.webp` ],
			[ /27565450061130\/object.3ds/, `${ this.pwd }/view.3ds` ],

		);

	}

	launch () {

		this.use();
		
		Mods.Tanki.use();

	}

}