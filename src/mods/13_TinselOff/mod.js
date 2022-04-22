class Mod {

	name = 'TinselOff';
	type = 'T';
	title = 'TinselOff';
	desc = 'отключает краски и скинчики';

	use () {

		Mods.ResReplace.use(

			[ /lightmap.webp/, 				`${ this.pwd }/lightmap.webp` ],
			[ /details_alpha.webp/, 		`${ this.pwd }/details_alpha.webp` ],

		);

		Mods.Packages.use(

			[ 'Bitmap:', async f => {

				const gg = await createImageBitmap( new Blob([new Uint8Array([0x52,0x49,0x46,0x46,0x24,0x00,0x00,0x00,0x57,0x45,0x42,0x50,0x56,0x50,0x38,0x20,0x18,0x00,0x00,0x00,0x30,0x01,0x00,0x9d,0x01,0x2a,0x01,0x00,0x01,0x00,0x01,0xc0,0x2e,0x25,0xa4,0x00,0x03,0x70,0x00,0xfe,0xfa,0x55,0x40,0x00]).buffer]) );
				const FF = new f( gg, 1, 1 );

				const BT = Mods.Packages.get( 'BitmapTexture:' );
				const nul = new BT( FF );

				window.nul = nul;

			}],

			[ 'ColoringModel:', f => {

				const getColoring = f.prototype.getColoring;
				const getAnimatedColoring = f.prototype.getAnimatedColoring;

				f.prototype.getColoring = function ( t ) {
					const res = getColoring.bind( this )( t );
					if ( window.nul ) res._texture = nul;
					return res;
				}

				f.prototype.getAnimatedColoring = function ( t ) {
					const res = getAnimatedColoring.bind( this )( t );
					if ( window.nul ) res._texture = nul;
					return res;
				}

			}],

		);

	}

	launch () {

		this.use();

		Mods.Tanki.use();

	}

}