import Mods from '/src/Mods.js';

class Mod {

	name = 'Test';
	type = 'T';
	title = 'Тест-1';
	desc = 'Общая тестовая компиляция';

	async launch () {

		Mods.Packages.use( [

			[ 'ApplicationLoaderComponent$', f => {

				f.prototype.onWillMount = function () {};

			}],

			[ 'MainScreenComponentStyle', f => {

				const bp = Mods.Packages.prop( f, 'buttonPlay' );
				const rs = Mods.Packages.prop( f[bp], 'ruleSets' );
				const old = f[bp][rs][0];
				
				f[bp][rs][0] = function ( t ) {
					let res = old( t );
					t.backgroundColor = 'none';
					return res;
				}

			}],

		]);

		/*Mods.GarageOff.use();
		Mods.ClearVision.use();
		Mods.UIImprove.use();*/

		Mods.Tanki.use();

	}

}

export default new Mod;