import Mods from '/src/Mods.js';

class Test {

	type = "T";
	name = "Тест-1";
	desc = "Общая тестовая компиляция из утилит";

	async launch () {

		this.configResources();
		this.configAnother();

		Mods.Tanki.launch();

	}

	configResources () {

		Mods.Replacer.use( [

			[ /mp3$/, 		'/src/mods/test/assets/null.mp3' ],

		]);

		Mods.Replacer.use( [

			[ /background\/.+?\.webp/, 				'/src/mods/test/assets/background.webp' ],

			[ /27565450061130\/.+?\.webp/, 			'/src/mods/test/assets/garage/null.webp' ],
			[ /27565450061130\/object.3ds/, 		'/src/mods/test/assets/garage/view.3ds' ],

			[ /27117120727047\/image.webp/, 		'/src/mods/test/assets/flag_blue.webp' ],
			[ /27117122230525\/image.webp/, 		'/src/mods/test/assets/flag_red.webp' ],

			[ /lightmap.webp$/, 					'/src/mods/test/assets/lightmap.webp' ],

		]);

	}

	configAnother () {

		Mods.Packages.use( ( n, f ) => {

			if ( n == '.tanks.clients.html5.lobby.common.loader.ApplicationLoaderComponent' ) {

				f.prototype.updateCurrentTip_0 = function() {};

			}

		});

		Mods.Packages.use( ( n, f ) => {

			if ( n == '.alternativa.engine3d.core.WebGLRenderer' ) {

				const OLD = f.prototype.createGLContext_0;

				f.prototype.createGLContext_0 = function ( t ) {
					this.transparent_0 = true;
					return OLD.bind(this)( t )

				}

			}

		});
	}

}

export default new Test;