import Mods from '/src/Mods.js';

class Mod {

	name = 'Test';
	type = 'T';
	title = 'Тест-1';
	desc = 'Общая тестовая компиляция из утилит';

	async launch () {

		Mods.GarageOff.use();
		Mods.ClearVision.use();

		Mods.Packages.use( ( n, f ) => {

			if ( n.match( 'ApplicationLoaderComponent' ) ) {

				f.prototype.onWillMount = function () {};

			}

		} );

		Mods.Packages.use( ( n, f ) => {

			if ( n.match( 'AnnouncementHomeScreenComponent' ) ) {

				f.prototype.componentDidMount = function () {};

			}

		} );

		Mods.Tanki.use();

	}

}

export default new Mod;