class Mod {

	name = 'BetterVisibility';
	type = 'TANKI';
	title = 'BetterVisibility';
	desc = `Покрашены в яркие цвета мины, флаги, мяч, дроп, бомба васпа
Все маркеры видны на любом расстоянии
Отклчена полупрозрачность флагов и мячей на танках
Дальность радара увеличена в 2 раза
Отключен графические эффект бессмертия у танков при респауне
Отключены графические эффекты нагрева и заморозки у танков
Старые индикаторы урона
Увеличена скорость подъема камеры через колесико мыши
Убраны все подсветки кроме радара хорнета
Цвет подсветки радара хорнета - Красный
Отключены некоторые графические эффекты взрыва бомбы васпа
	`;


	use () {

		Mods.Resources.use(

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

			[ /30023133402211\/.+?webp/, 	`${ this.pwd }/bomb/blue.webp` ],
			[ /30023133421305\/.+?webp/, 	`${ this.pwd }/bomb/red.webp` ],

		);

		Mods.Packages.use(

			[ 'BattleMapComponent:', f => {

				const createMapParams_0 = f.prototype.createMapParams_0;

				f.prototype.createMapParams_0 = function () {

					const params = { 
						ac: { r: 0.7, g: 0.7, b: 0.7, a: 1 },
						lc: { r: 0.6, g: 0.6, b: 0.6, a: 1 },
						ld: { x: -0.4, y: -0.5, z: -0.6 },
					}

					const
					res = createMapParams_0.bind( this )(),

					Color = Mods.Packages.get( 'core.Color:' ),
					Vector3 = Mods.Packages.get( 'Vector3:' ),

					copy_1 = Mods.Packages.prop( Color.prototype, 'copy', 1 ),
					init_1 = Mods.Packages.prop( Vector3.prototype, 'init', 1 );

					res.ambientColor[ copy_1 ]( params.ac );
					res.lightColor[ copy_1 ]( params.lc );
					res.lightDirection[ init_1 ]( params.ld );

					return res;

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

			[ 'TemperatureComponent:', f => {

				f.prototype.changeTemperature_0 = function () {};

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

				f.Companion.HEIGHT_CHANGE_PER_WHEEL_CLICK_0 = 0.085;

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

			[ 'NuclearBangEffect:', f => {

				const play_2 = Mods.Packages.prop( f.prototype, 'play', 2 );

				f.prototype[ play_2 ] = function ( t, e ) {

					const
					get_pools = Mods.Packages.get( 'get_pools' ),
					waves = get_pools( e ).nuclearLightWaves.get(),
					init_2 = Mods.Packages.prop( waves, 'init', 2 ),
					addGE_1 = Mods.Packages.prop( e, 'addGraphicEffect', 2 );

					waves[ init_2 ]( t, this.waveMaterial_0 );
					e[ addGE_1 ]( waves );

				}

			}],

		);

	}

	async launch () {

		this.use();

		Mods.Tanki.use();

	}

}