import Mods from '/src/Mods.js';

class Mod {

	name = 'Test';
	type = 'D';
	title = 'Тест';
	desc = 'Главный тестовый мод';

	launch () {

		Mods['UI+'].use();
		Mods['GarageOff'].use();
		Mods['Vision+'].use();

		Mods.Tanki.use();

	}

}

export default new Mod;