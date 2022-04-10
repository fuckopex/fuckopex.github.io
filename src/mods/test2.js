import Mods from '/src/Mods.js';

class Test2 {

	type = 'L';
	name = 'Test2';
	desc = 'Типа тест 2';

	launch () {

		Mods.Packages.use();
		Mods.Tanki.launch();

	}

}

export default new Test2;