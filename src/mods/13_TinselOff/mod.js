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

		Mods.Tanki.replace( /(this\.defaultBillboardImage_0=)(.)/, '$1($2._texture=window.billboardB0,$2)' );

		Mods.Packages.use(

			[ 'Bitmap:', async Bitmap => {

				const coloring = await fetch( `${ this.pwd }/coloring.webp` ).then( r => r.blob() );
				const billboard = await fetch( `${ this.pwd }/billboard.webp` ).then( r => r.blob() );

				const coloringIB = await createImageBitmap( coloring );
				const billboardIB = await createImageBitmap( billboard );

				const coloringB = new Bitmap( coloringIB, 1, 1 );
				const billboardB = new Bitmap( billboardIB, 250, 125 );

				const BT = Mods.Packages.get( 'BitmapTexture:' );

				const coloringB0 = new BT( coloringB );
				const billboardB0 = new BT( billboardB );

				window.coloringB0 = coloringB0;
				window.billboardB0 = billboardB0;

			}],

			[ 'ColoringModel:', f => {

				const getColoring = f.prototype.getColoring;
				const getAnimatedColoring = f.prototype.getAnimatedColoring;

				f.prototype.getColoring = function ( t ) {
					const res = getColoring.bind( this )( t );
					if ( window.coloringB0 ) res._texture = coloringB0;
					return res;
				}

				f.prototype.getAnimatedColoring = function ( t ) {
					const res = getAnimatedColoring.bind( this )( t );
					if ( window.coloringB0 ) res._texture = coloringB0;
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