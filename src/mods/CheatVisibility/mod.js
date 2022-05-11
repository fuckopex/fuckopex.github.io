let STORE = null;

class Mod {

	name = 'CheatVisibility';
	type = 'C';
	title = 'CheatVisibility';
	desc = `Изменения превносимые читом:

– Видимый радиус взрыва бомбы Васпа
– Убирает все кусты с карт
– Вражеские мины всегда видны
– Вражеские ники всегда видны
– Вражеские ники отрисовываются поверх зданий
– Все танки раскрашены в цвета команд
– Постоянная подсветка всех танков и дропа
– Крутой командирский обзор

+ Все изменения из мода BetterVisibility`;


	use () {

		Mods.BetterVisibility.use();

		Mods.Resources.use(

			[ /27570502747446\/object.3ds/, `${ this.pwd }/bomb.3ds` ],

		);

		Mods.Packages.use(

			[ 'FollowCameraRelativePath:1', f => {

				const bz = Mods.Packages.get( 'alternativa.math.bezier' );
				const getPoint_2 = Mods.Packages.prop( f.prototype, 'getPoint', 2 );

				const p0_0 = [ 545, 145 ];
				const p1_0 = [ 1395, 930 ];
				const p2_0 = [ 1565, 2245 ];
				const p3_0 = [ 5e3, 5e3 ];
				const pathDistanceFactor = 1;

				f.prototype[ getPoint_2 ] = function ( t, e ) {
					e.distance = bz( t, p0_0[0], p1_0[0], p2_0[0], p3_0[0] ) * pathDistanceFactor;
					e.height = bz( t, p0_0[1], p1_0[1], p2_0[1], p3_0[1] );
				}

			}],

			[ 'BattleMapComponent:', f => {

				const setupMap_0 = f.prototype.setupMap_0;

				f.prototype.setupMap_0 = function () {

					const AL = Mods.Packages.get( 'collections.ArrayList:' );
					const add_1 = Mods.Packages.prop( AL.prototype, 'add', 1 );

					let sg = this.mapResource_0.map.staticGeometry;
					let al = sg.toArray();

					sg.clear();

					for ( let e of al )
						if ( ! e.libraryName.match( 'Bush' ) )
							sg[ add_1 ]( e );

					return setupMap_0.bind( this )();

				}

			}],

			[ 'MineVisibilityDistanceComponent:', f => {

				f.prototype.isAlwaysVisible_0 = function () { return true; };

			}],

			[ 'RemoteUserTitleConfiguratorComponent:', f => {

				f.prototype.adjustEnemyTitleVisibility_0 = function () { this.visible_0 = true; };

			}],

			[ 'RenderStage:', f => {

				Object.defineProperty( f, 'UserTitles', {
					get: function () { return f.SpritesOnTop }
				});

			}],

			[ 'Highlighter:', f => {

				f.prototype.enableHighlight_0 = function( t ) {}
				f.prototype.disableHighlight_0 = function( t ) {}

			}],

			[ 'GameMode:', f => {

				const initComponent = f.prototype.initComponent;

				f.prototype.initComponent = function () {

					const
					g = Mods.Packages.get.bind( Mods.Packages ),
					p = Mods.Packages.prop.bind( Mods.Packages ),

					BattleEntity = g( 'BattleEntity:' ),
					gcon_0 = p( BattleEntity.prototype, 'getComponentOrNull', 0 ),
					send_1 = p( BattleEntity.prototype, 'send', 1 ),
					on_4 = p( BattleEntity.prototype, 'on', 4 ),

					getKClass = g( 'getKClass:' ),
					TankAddedOnField = g( 'TankAddedOnField:' ),

					RemoteUserTitleConfiguratorComponent = g( 'RemoteUserTitleConfiguratorComponent:' ),
					ConfigureRemoteUserTitleMessage = g( 'ConfigureRemoteUserTitleMessage:' ),

					SkinColorTransformMessage = g( 'SkinColorTransformMessage:' ),
					ColorTransform = g( 'ColorTransform:' ),

					Highlighter = g( 'Highlighter:' ),
					UserComponent = g( 'UserComponent:' ),

					skinGray = new SkinColorTransformMessage( new ColorTransform( ...[ 0, 0, 0, 1, 165, 165, 165, 1 ] ) ),
					skinBlue = new SkinColorTransformMessage( new ColorTransform( ...[ 0, 0, 0, 1, 80, 180, 255, 1 ] ) ),
					skinRed = new SkinColorTransformMessage( new ColorTransform( ...[ 0, 0, 0, 1, 255, 124, 124, 1 ] ) ),

					drgb = ( r, g, b ) => ( r << 16 ) + ( g << 8 ) + b,

					hlGray = drgb( 0, 255, 170 ),
					hlBlue = drgb( 80, 180, 255 ),
					hlRed = drgb( 255, 124, 124 ),

					bros = Array.prototype.concat(
						STORE.state.friends.accepted.toArray(),
						STORE.state.clan.clanAcceptedMembers.toArray()
					);


					this.entity[ on_4 ]( getKClass( TankAddedOnField ), 0, !1, msg => {

						let entity = msg.tank,
							rutcc = null;				

						if ( rutcc = entity[ gcon_0 ]( RemoteUserTitleConfiguratorComponent ) ) {

							entity[ on_4 ]( getKClass( ConfigureRemoteUserTitleMessage ), 0, !0, msg => {
								
								let team = rutcc.getTeamRelation_0(),
									uc = entity[ gcon_0 ]( UserComponent );

								if ( team.name == 'ALLY' ) {
									entity[ gcon_0 ]( Highlighter ).highlight_0( hlBlue, false );
									entity[ send_1 ]( skinBlue );
								}

								if ( team.name == 'ENEMY' ) {
									entity[ gcon_0 ]( Highlighter ).highlight_0( hlRed, false );
									entity[ send_1 ]( skinRed );
								}

								for ( let bro of bros )
								if ( bro.equals( uc.userId ) ) {
									entity[ gcon_0 ]( Highlighter ).highlight_0( hlGray, false );
									entity[ send_1 ]( skinGray );
									break;
								}

							});

						} else {

							entity[ gcon_0 ]( Highlighter ).highlight_0( hlGray, false ),
							entity[ send_1 ]( skinGray );

						}

					});

					return initComponent.bind( this )();

				}

			}],

			[ 'com.alternativaplatform.redux.Store:', f => {

				const redux = Mods.Packages.get( 'com.alternativaplatform.redux:' );
				const Store = redux.Store;

				redux.Store = function ( ...args ) {

					STORE = this;

					return Store.bind( this )( ...args );

				}

				redux.Store.prototype = Store.prototype;
				redux.Store.$metadata$ = Store.$metadata$;

			}],

			[ 'BattleBonus:', f => {

				const initLight_0 = f.prototype.initLight_0;

				f.prototype.initLight_0 = function () {

					const res = initLight_0.bind( this )();

					this.bonusMesh.object3d.outlineColor = this.bonusData_0.bonusLight.lightColor.color;
					this.bonusMesh.object3d.outlined = true;

					return res;

				}

			}],

		);

	}

	async launch () {

		this.use();

		Mods.Tanki.use();

	}

}