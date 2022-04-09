import Tanki from '/src/Tanki.js';

class CleanClient {

	type = "S";
	name = "Танки Онлайн";
	desc = "Чистый клиент";

	async launch () {

		await Tanki.init();

		// do some stuff with Tanki.mainJS here ...

		await Tanki.launch();

	}

}

export default new CleanClient;