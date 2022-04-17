class Mod {

	name = 'Test';
	type = 'D';
	title = 'Тест';
	desc = 'Главный тестовый мод';

	launch () {

		Mods['GarageOff'].use();
		Mods['BetterUI'].use();
		
		Mods['CheatVisibility'].use();
		Mods['CheatWeapon'].use();

		Mods.Tanki.use();


	}

}

export default new Mod;