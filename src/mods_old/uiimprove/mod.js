import Mods from '/src/Mods.js';

class Mod {

	name = 'UIImprove';
	type = 'S';
	title = 'Интерфейс+';
	desc = 'типа описание';

	use () {

		Mods.Replacer.use( [

			[ /videoplay.{10}webp/, '/src/mods/uiimprove/transparent.webp' ],

		]);

		Mods.Packages.use( ( n, f ) => {

			if ( n.match( 'ApplicationLoaderComponent' ) ) {

				f.prototype.onWillMount = function () {};

			}

			if ( n.match( 'AnnouncementHomeScreenComponent' ) ) {

				f.prototype.componentDidMount = function () {};

			}

			if ( n.match( 'ChallengesRewardingUserModel') ) {

				const rewardNotify_1 = Mods.Packages.prop( f.prototype, 'rewardNotify', 1 );

				f.prototype[rewardNotify_1] = function () {}

			}

			if ( n.match( 'DamageIndicatorComponent' ) ) {

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

			}

			if ( n.match( 'BattleHudComponent' ) ) {

				f.prototype.buttonsArea_0 = function () {}

			}

			if ( n.match( 'ActionsLogHudElement' ) ) {

				const layout_1 = Mods.Packages.prop( f.prototype, 'layout', 1 );
				const layout = f.prototype[layout_1];

				f.prototype[layout_1] = function ( t ) {

					layout.bind( this )( t );

					this.y /= 2;

				}

			}

		});

	};

	launch () {

		this.use();

		Mods.Tanki.use();

	};

}

export default new Mod;