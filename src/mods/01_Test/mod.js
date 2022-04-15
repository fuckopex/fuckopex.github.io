class Mod {

	name = 'Test';
	type = 'D';
	title = 'Тест';
	desc = 'Главный тестовый мод';

	launch () {

		Mods['UI+'].use();
		Mods['GarageOff'].use();
		Mods['Vision+'].use();


		Mods.Packages.use(

			[ 'BattleSelectParkourWarningDialogComponent:', f => {

				const render = Mods.Packages.prop( f.prototype, 'render', 1 );

				f.prototype[ render ] = function () {

					const dispatch = Mods.Packages.prop( this.gateway_0, 'dispatch', 1 )
					const fight = Mods.Packages.get( 'ProBattleActions:' ).Fight;

					this.gateway_0[ dispatch ]( new fight( this.props.battleId, this.props.battleTeam ) );

				}

			}],

		)

		Mods.Tanki.use();


	}

}

export default new Mod;