class Mod {

	name = 'DebugMJS';
	type = 'D';
	title = 'Отладить main.js';
	desc = 'Отладочный запуск танкового main.js из файла';


	async launch () {

		await Mods.JSasMod.open();
		
		Mods.Tanki.js = Mods.JSasMod.js;
		Mods.Tanki.use();

	}

}

export default new Mod;