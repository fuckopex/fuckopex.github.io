class Mod {

	name = 'BetterVisibility';
	type = 'T';
	title = 'BetterVisibility';
	desc = 'описание придумать';

	use () {

		Mods.ResReplace.use(

			[ /27761531142643\/.+?.webp/, 	`${ this.pwd }/mine/red.webp` ],
			[ /27761531060673\/.+?.webp/, 	`${ this.pwd }/mine/blue.webp` ],

			[ /26563565236463\/.+?.webp/, 	`${ this.pwd }/flagb/green.webp` ],
			[ /27117122230525\/.+?.webp/, 	`${ this.pwd }/flagb/red.webp` ],
			[ /27117120727047\/.+?.webp/, 	`${ this.pwd }/flagb/blue.webp` ],

			[ /27772006650540\/.+?.webp/, 	`${ this.pwd }/bonus/nuclear.webp` ],
			[ /27772006577517\/.+?.webp/, 	`${ this.pwd }/bonus/repair.webp` ],
			[ /27772006543531\/.+?.webp/, 	`${ this.pwd }/bonus/armor.webp` ],
			[ /27772006563427\/.+?.webp/, 	`${ this.pwd }/bonus/damage.webp` ],
			[ /27772006632755\/.+?.webp/, 	`${ this.pwd }/bonus/nitro.webp` ],
			[ /27772006615450\/.+?.webp/, 	`${ this.pwd }/bonus/gold.webp` ],
			[ /27772006503012\/.+?.webp/, 	`${ this.pwd }/bonus/cont.webp` ],
			[ /27772006526555\/.+?.webp/, 	`${ this.pwd }/bonus/cry.webp` ],

		);

		Mods.Packages.use(

			[ 'BattleMapComponent:', f => {

				const CreateMapParams_0 = f.prototype.CreateMapParams_0;

				f.prototype.CreateMapParams_0 = function () {

					const params = { 
						ambientColor: { r: 0.7, g: 0.7, b: 0.7, a: 1 },
						lightColor: { r: 0.6, g: 0.6, b: 0.6, a: 1 },
						lightDirection: { x: -0.4, y: -0.5, z: -0.6 },
					}

					const
					RESULT = CreateMapParams_0.bind( this )(),

					Color = Mods.Packages.get( 'core.Color:' ),
					Vector3 = Mods.Packages.get( 'Vector3:' ),

					copy_1 = Mods.Packages.prop( Color.prototype, 'copy', 1 ),
					init_1 = Mods.Packages.prop( Vector3.prototype, 'init', 1 );

					RESULT.ambientColor[copy_1]( params.ambientColor );
					RESULT.lightColor[copy_1]( params.lightColor );
					RESULT.lightDirection[init_1]( params.lightDirection );

					return RESULT;

				}

			}],

			[ 'flag.HudMarker:', f => {

				f.Companion.DEFAULT_VISIBLE_DISTANCE = 0;

			}],

			[ 'flag.CommonFlag:', f => {

				const updateSkinAlpha_0 = Mods.Packages.prop( f.prototype, 'updateSkinAlpha', 0 )

				f.prototype[ updateSkinAlpha_0 ] = function () {

					if ( this.skin ) this.skin.alpha = 1;

				}

			}],

			[ 'RadarComponent:', f => {
				
				const init_3 = Mods.Packages.prop( f.prototype, 'init', 3 );

				const init = f.prototype[ init_3 ];

				f.prototype[ init_3 ] = function ( t, e, n ) {

					t.exitRange = 120e2;

					return init.bind( this )( t, e, n );

				};

			}],

			[ 'TanksTrackingComponent:', f => {

				const init_2 = Mods.Packages.prop( f.prototype, 'init', 2 );

				const init = f.prototype[ init_2 ];

				f.prototype[ init_2 ] = function ( t, e ) {

					t.enterRange = 115e2;
					t.exitRange = 120e2;

					return init.bind( this )( t, e );

				};

			}],			

			[ 'SpawnProtectionEffectComponent:', f => {

				f.prototype.activateProtection_0 = function () {};

			}],

			[ 'DamageIndicatorComponent:', f => {

				const getTextView_0 = f.prototype.getTextView_0;

				f.prototype.getTextView_0 = function ( damage, itype, crit, kill, debug ) {

					const colors = Mods.Packages.get( 'ColorConstants:' ).Companion;
					const result = getTextView_0.bind( this )( damage, itype, crit, kill, debug );

					if ( crit ) {

						if ( itype.name == 'DAMAGE' ) result.color = colors.DAMAGE_YELLOW;
						if ( itype.name == 'HEAL' ) result.color = colors.DAMAGE_CYAN;

					}

					if ( kill ) result.color = colors.DAMAGE_RED;

					result.fontSize = 16;

					return result;

				}

			}],

			[ 'MouseLookCameraController:', f => {

				f.Companion.HEIGHT_CHANGE_PER_WHEEL_CLICK_0 = 0.1;

			}],

			[ 'FollowCameraRelativePath:1', f => {

				const bz = Mods.Packages.get( 'alternativa.math.bezier' );
				const getPoint_2 = Mods.Packages.prop( f.prototype, 'getPoint', 2 );

				const p0_0 = [ 545, 145 ];
				const p1_0 = [ 1395, 930 ];
				const p2_0 = [ 1565, 2245 ];
				const p3_0 = [ 5e3, 5e3 ];
				const pathDistanceFactor = 1;

				f.prototype[ getPoint_2 ] = function ( t, e ) {
					e.height = bz( t, p0_0[1], p1_0[1], p2_0[1], p3_0[1] );
					e.distance = pathDistanceFactor * bz( t, p0_0[0], p1_0[0], p2_0[0], p3_0[0] );
				}

			}],

			[ 'skin.Highlighter:', f => {

				const enableHighlight_0 = f.prototype.enableHighlight_0;

				f.prototype.enableHighlight_0 = function ( h ) {

					if ( h.name == 'RADAR' ) {
						enableHighlight_0.bind( this )( h );
					}

				}

			}],

			[ 'skin.HighlightType:', f => {

				for ( let h of f.values() )
					if ( h.name == 'RADAR' )
						h.color = 16744576;

			}],

		);

	}

	async launch () {

		this.use();

		Mods.Tanki.use();

	}

}

export default new Mod;