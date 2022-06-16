let coloringB0, billboardB0;

class Mod {

	name = 'TinselOff';
	type = 'TANKI';
	title = 'TinselOff';
	desc = `Отключено отображение всех красок и скинов
Цвет всех танков - Приятный зеленый
Убраны картинки с билбордов в битве`;


	async init () {

		this.coloring = await fetch( `${ this.pwd }/coloring.webp` ).then( r => r.blob() );
		this.billboard = await fetch( `${ this.pwd }/billboard.webp` ).then( r => r.blob() );

	}

	use () {

		Mods.Resources.use(

			[ /lightmap.webp/, 				`${ this.pwd }/lightmap.webp` ],
			[ /details_alpha.webp/, 		`${ this.pwd }/details_alpha.webp` ],

		);

		Mods.Packages.use(

			[ 'TankLobbyComponent:', f => {

				const createWorld_0 = f.prototype.createWorld_0;

				f.prototype.createWorld_0 = function () {

					const res = createWorld_0.bind( this )();

					if ( ! this.glRenderer_0 ) return;

					const ac = this.glRenderer_0.renderer.lighting.ambientColor;
					const ml = this.glRenderer_0.renderer.lighting.mainLight.baseColor;

					ac.r = ac.g = ac.b = 0.7;
					ml.r = ml.g = ml.b = 0.6;

				}

			}],
			
			[ 'Bitmap:', async Bitmap => {

				const coloringIB = await createImageBitmap( this.coloring );
				const billboardIB = await createImageBitmap( this.billboard );

				const coloringB = new Bitmap( coloringIB, 1, 1 );
				const billboardB = new Bitmap( billboardIB, 250, 125 );

				const BT = Mods.Packages.get( 'BitmapTexture:' );

				coloringB0 = new BT( coloringB );
				billboardB0 = new BT( billboardB );

			}],

			[ 'ColoringModel:', f => {

				const getColoring = f.prototype.getColoring;
				const getAnimatedColoring = f.prototype.getAnimatedColoring;

				f.prototype.getColoring = function ( t ) {

					const res = getColoring.bind( this )( t );
					
					coloringB0 && ( res._texture = coloringB0 );

					return res;

				}

				f.prototype.getAnimatedColoring = function ( t ) {

					const res = getAnimatedColoring.bind( this )( t );
					
					coloringB0 && ( res._texture = coloringB0 );

					return res;

				}

			}],

			[ 'BattleMapConfig:', f => {

				const invoke_1 = Mods.Packages.prop( f.prototype, 'invoke', 1 );
				const invoke = f.prototype[ invoke_1 ];

				f.prototype[ invoke_1 ] = function ( t ) {

					billboardB0 && ( this.defaultBillboardImage_0._texture = billboardB0 );

					return invoke.bind( this )( t );

				}

			}],

		);

	}

	launch () {

		this.use();

		Mods.Tanki.use();

	}

}