class Mod {

	name = 'Test';
	type = 'D';
	title = 'Тест';
	desc = 'Главный тестовый мод';

	launch () {

		Mods['GarageOff'].use();
		Mods['BetterUI'].use();
		Mods['BetterChat'].use();

		Mods['CheatVisibility'].use();
		Mods['CheatWeapon'].use();

		Mods.ResReplace.use(

		//	[ /lightmap.webp/, 				`${ this.pwd }/white_1px.webp` ],

		);

		Mods.Tanki.use();


	}

}

export default new Mod;