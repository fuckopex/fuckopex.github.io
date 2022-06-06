let MAGIC = {};

class Mod {

	name = 'CheatWeapon';
	type = 'C';
	title = 'CheatWeapon';
	desc = `Время удержания цели на страйкере, гауссе, терминаторе - 10 секунд
Физическая модель у всех башен танков одинокова и увеличена на ~ 20%
Увеличен угол конуса у изиды
Сосулька крусейдера бьёт только живых врагов`;


	use () {

		Mods.Packages.use(

			[ 'StrikerWeapon:', f => {

				Object.defineProperty( f.prototype, 'maxLockRegainTimeMs', { get: () => 10e3 } );

			}],

			[ 'TerminatorWeapon:', f => {

				Object.defineProperty( f.prototype, 'maxLockRegainTimeMs', { get: () => 10e3 } );

			}],

			[ 'GaussWeapon:', f => {

				Object.defineProperty( f.prototype, 'maxLockRegainTimeMs', { get: () => 10e3 } );

			}],

			[ 'TurretDescriptor:', f => {

				f.prototype.parseCollisionGeometry_0 = function () {

					const
					ArrayList = Mods.Packages.get( 'ArrayList:' ),
					Mat4x3 = Mods.Packages.get( 'Mat4x3:' ),
					Vector3 = Mods.Packages.get( 'Vector3:' ),
					add_1 = Mods.Packages.prop( ArrayList.prototype, 'add', 1 ),
					add_3 = Mods.Packages.prop( Vector3.prototype, 'add', 3 );

					let al = new ArrayList( [] );
					let tcb = {
						halfSize: new Vector3(),
						transform: new Mat4x3(),
					};

					tcb.halfSize[ add_3 ]( 100, 180, 50 );
					tcb.transform.m23 = 50;

					al[ add_1 ]( tcb );

					return al;

				}

			}],

			[ 'IsisTargetingSystem:', f => {

				const calculateLocalDirections_0 = f.prototype.calculateLocalDirections_0;

				f.prototype.calculateLocalDirections_0 = function ( t ) {

					return calculateLocalDirections_0.bind( this )( 0.348 );

				}

			}],

			[ 'CrusaderProjectileComponent:', f => {

				const considerBody_1 = Mods.Packages.prop( f.prototype, 'considerBody', 1 );

				f.prototype[ considerBody_1 ] = function ( t ) {

					const
					g = Mods.Packages.get.bind( Mods.Packages ),
					p = Mods.Packages.prop.bind( Mods.Packages ),

					BattleEntity = g( 'BattleEntity:' ),
					gcon_0 = p( BattleEntity.prototype, 'getComponentOrNull', 0 ),

					RemoteUserTitleConfiguratorComponent = g( 'RemoteUserTitleConfiguratorComponent:' ),
					TerminatorRecoilComponent = g( 'TerminatorRecoilComponent:' ),
					TankComponent = g( 'components.TankComponent:' );

					let title, tankc;

					if ( t.data )

					if ( tankc = t.data[ gcon_0 ]( TankComponent ) )
					if ( tankc.state.name$ == 'ACTIVE' )

					if ( title = t.data[ gcon_0 ]( RemoteUserTitleConfiguratorComponent ) )
					if ( title.getTeamRelation_0().name == 'ENEMY' ) {
						
						if ( MAGIC.isActive )
							return t.data[ gcon_0 ]( TerminatorRecoilComponent ) != null;

						return true;

					}
					
					return false;
					
				}

			}],

		);

	}

	async launch () {

		this.use();

		Mods.Tanki.use();

	}

}