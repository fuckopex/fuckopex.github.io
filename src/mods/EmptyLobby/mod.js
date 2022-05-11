class Mod {

	name = 'EmptyLobby';
	type = 'T';
	title = 'Пустой гараж';
	desc = `Убрна 3D-модель гаража в лобби игры`;

	use () {

		Mods.Resources.use(

			[ /27565450061130\/.+?\.webp/, 	`${ this.pwd }/null.webp` ],
			[ /27565450061130\/object.3ds/, `${ this.pwd }/view.3ds` ],

		);

	}

	launch () {

		this.use();
		
		Mods.Tanki.use();

	}

}