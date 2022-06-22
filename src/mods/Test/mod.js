class Mod {

	name = 'Test';
	type = 'DEBUG';
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

			[ 'ClosedContainerComponent', f => {

				f.prototype.openContainer_0 = function () {

					try {

						let gy = Mods.Packages.get( 'ContainerActions' ).OpenLootBox;
						let yes = Mods.Packages.get( 'OpenLootBox' ).ContainerActions;
						let no = Mods.Packages.get( 'OpenLootBox' ).no;

						let t = this.props.container;

						this.store.dispatchFunction( new gy( t.id, t.type, 1 ) );

					}
					catch ( e ) {

						console.log(e);

					}


				}

			}],

		);

		Mods.Resources.use(

			

		)

		Mods.Tanki.use();


	}

}