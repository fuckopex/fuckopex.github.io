import Mods from '/src/Mods.js';

class Mod {

	name = 'Test';
	type = 'T';
	title = 'Тест-1';
	desc = 'Общая тестовая компиляция';

	async launch () {

		Mods.GarageOff.use();
		Mods.ClearVision.use();
		Mods.UIImprove.use();

		Mods.Tanki.use();

	}

}

export default new Mod;