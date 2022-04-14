import Mods from '/src/Mods.js';

const dir = import.meta.url.replace( '/mod.js', '' );

class Mod {

	name = 'UI+';
	type = 'T';
	title = 'Интерфейс+';
	desc = 'типа описание';

	use () {

		Mods.ResReplace.use(

			[ /videoplay.{10}webp/, `${ dir }/transparent.webp` ],

		);

		Mods.Packages.use(

			[ 'ApplicationLoaderComponent$', f => {

				f.prototype.onWillMount = function () {};

			}],

			[ 'AnnouncementHomeScreenComponent$', f => {

				f.prototype.componentDidMount = function () {};

			}],

			[ 'ChallengesRewardingUserModel$', f => {

				const rewardNotify_1 = Mods.Packages.prop( f.prototype, 'rewardNotify', 1 );

				f.prototype[rewardNotify_1] = function () {};

			}],

			[ 'DamageIndicatorComponent$', f => {

				const getTextView_0 = f.prototype.getTextView_0;

				f.prototype.getTextView_0 = function ( damage, itype, crit, kill, debug ) {

					const colors = Mods.Packages.get( 'ColorConstants' ).Companion;
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

			[ 'BattleHudComponent$', f => {

				f.prototype.buttonsArea_0 = function () {};

			}],

			[ 'ActionsLogHudElement$', f => {

				const layout_1 = Mods.Packages.prop( f.prototype, 'layout', 1 );
				const layout = f.prototype[layout_1];

				f.prototype[layout_1] = function ( t ) {

					layout.bind( this )( t );

					this.y /= 2.2;

				}

			}],

			[ 'MainScreenComponentStyle', f => {

				const bp = Mods.Packages.prop( f, 'buttonPlay' );
				const rs = Mods.Packages.prop( f[bp], 'ruleSets' );
				const old = f[bp][rs][0];
				
				f[bp][rs][0] = function ( t ) {
					let res = old( t );
					t.backgroundColor = 'none';
					return res;
				}

			}],

		);

	}

	launch () {

		this.use();

		Mods.Tanki.use();

	};

}

export default new Mod;