class Mod {

	name = 'EmptyLobby';
	type = 'T';
	title = 'Пустой гараж';
	desc = `Убрна 3D-модель гаража в лобби игры`;

	use () {

		Mods.Resources.use(

			[ /30023217453322\/.+?\.webp/, 	`${ this.pwd }/null.webp` ],
			[ /30023217453322\/object.3ds/, `${ this.pwd }/view.3ds` ],

		);

	}

	launch () {

		this.use();
		
		Mods.Tanki.use();

	}

}