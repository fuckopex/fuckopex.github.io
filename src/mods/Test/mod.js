class Mod {

	name = 'Test';
	type = 'D';
	title = 'Тест';
	desc = 'Главный тестовый мод';


	launch () {

		Mods.EmptyLobby.use();
		Mods.BetterUI.use();
		Mods.BetterChat.use();
		Mods.BetterVisibility.use();

		Mods.TinselOff.use();

		Mods.CheatVisibility.use();
		Mods.CheatWeapon.use();

		Mods.WhiteTextures.use();

		Mods.Packages.use(

			

		);

		Mods.Tanki.use();


	}

}