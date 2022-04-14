import Mods from '/src/Mods.js';

const dir = import.meta.url.replace( '/mod.js', '' );

class Mod {

	name = 'Vision+';
	type = 'T';
	title = 'Контрастность+';
	desc = 'описание придумать';

	use () {

		Mods.ResReplace.use(

			[ /27761531142643\/.+?.webp/, 	`${ dir }/mine/red.webp` ],
			[ /27761531060673\/.+?.webp/, 	`${ dir }/mine/blue.webp` ],

			[ /26563565236463\/.+?.webp/, 	`${ dir }/flagb/green.webp` ],
			[ /27117122230525\/.+?.webp/, 	`${ dir }/flagb/red.webp` ],
			[ /27117120727047\/.+?.webp/, 	`${ dir }/flagb/blue.webp` ],

			[ /27772006650540\/.+?.webp/, 	`${ dir }/bonus/nuclear.webp` ],
			[ /27772006577517\/.+?.webp/, 	`${ dir }/bonus/repair.webp` ],
			[ /27772006543531\/.+?.webp/, 	`${ dir }/bonus/armor.webp` ],
			[ /27772006563427\/.+?.webp/, 	`${ dir }/bonus/damage.webp` ],
			[ /27772006632755\/.+?.webp/, 	`${ dir }/bonus/nitro.webp` ],
			[ /27772006615450\/.+?.webp/, 	`${ dir }/bonus/gold.webp` ],
			[ /27772006503012\/.+?.webp/, 	`${ dir }/bonus/cont.webp` ],
			[ /27772006526555\/.+?.webp/, 	`${ dir }/bonus/cry.webp` ],

		);

		Mods.Packages.use(

			[ 'SpawnProtectionEffectComponent', f => {

				f.prototype.activateProtection_0 = function () {};

			}],

			[ '.flag.HudMarker', f => {

				f.Companion.DEFAULT_VISIBLE_DISTANCE = 0;

			}],

			[ 'RadarComponent', f => {
				
				const init_3 = Mods.Packages.prop( f.prototype, 'init', 3 );

				const init = f.prototype[ init_3 ];

				f.prototype[ init_3 ] = function ( t, e, n ) {

					t.exitRange = 120e2;

					return init.bind( this )( t, e, n );

				};

			}],

			[ 'TanksTrackingComponent', f => {

				const init_2 = Mods.Packages.prop( f.prototype, 'init', 2 );

				const init = f.prototype[ init_2 ];

				f.prototype[ init_2 ] = function ( t, e ) {

					t.enterRange = 115e2;
					t.exitRange = 120e2;

					return init.bind( this )( t, e );

				};

			}],

			[ 'BattleMapComponent', f => {

				const CreateMapParams_0 = f.prototype.CreateMapParams_0;

				f.prototype.CreateMapParams_0 = function () {

					const params = { 
						ambientColor: { r: 0.7, g: 0.7, b: 0.7, a: 1 },
						lightColor: { r: 0.6, g: 0.6, b: 0.6, a: 1 },
						lightDirection: { x: -0.4, y: -0.5, z: -0.6 },
					}

					const
					RESULT = CreateMapParams_0.bind( this )(),

					Color = Mods.Packages.get( '.core.Color$' ),
					Vector3 = Mods.Packages.get( '.Vector3$' ),

					copy_1 = Mods.Packages.prop( Color.prototype, 'copy', 1 ),
					init_1 = Mods.Packages.prop( Vector3.prototype, 'init', 1 );

					RESULT.ambientColor[copy_1]( params.ambientColor );
					RESULT.lightColor[copy_1]( params.lightColor );
					RESULT.lightDirection[init_1]( params.lightDirection );

					return RESULT;

				}

			}],

		);

	}

	async launch () {

		this.use();

		Mods.Tanki.use();

	}

}

export default new Mod;