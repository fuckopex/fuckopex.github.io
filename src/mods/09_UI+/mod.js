class Mod {

	name = 'UI+';
	type = 'T';
	title = 'Интерфейс+';
	desc = 'типа описание';


	use () {

		Mods.ResReplace.use(

			[ /background\/.+?webp/, 	`${ this.pwd }/bg.webp` ],

		);

		Mods.Packages.use(

			[ 'ApplicationLoaderComponent:', f => {

				f.prototype.onWillMount = function () {};

			}],

			[ 'ApplicationLoaderComponentStyle:', f => {

				const lg = Mods.Packages.prop( f, 'logo' );
				const rs = Mods.Packages.prop( f[lg], 'ruleSets' );
				const old = f[lg][rs][0];
				
				f[lg][rs][0] = function ( t ) {
					let res = old( t );
					t.display = 'none';
					return res;
				}

			}],

			[ 'AnnouncementHomeScreenComponent:', f => {

				f.prototype.componentDidMount = function () {};

			}],

			[ 'PrimaryMenuItemComponent:', f => {

				f.prototype.notificationIcon_0 = function () {};

			}],

			[ 'lobby.footer.FooterComponent:', f => {

				const clanMenuItem_0 = f.prototype.clanMenuItem_0;

				f.prototype.clanMenuItem_0 = function () {

					const res = clanMenuItem_0.bind( this )();

					res.hasNotification = false;

					return res;

				};

			}],

			[ 'MainScreenComponentStyle:', f => {

				const
				bp = Mods.Packages.prop( f, 'buttonPlay' ),
				rs = Mods.Packages.prop( f[bp], 'ruleSets' ),
				old = f[bp][rs][0];

				f[bp][rs][0] = function ( t ) {
					
					const
					clr = Mods.Packages.get( 'lobby.style.Color:' ).greenButtonBattlePickPlay,
					wa = Mods.Packages.prop( clr, 'withAlpha', 1 ),
					res = old( t );

					t.backgroundImage = 'none';
					t.backgroundColor = clr[ wa ]( 0.5 );

					return res;
				}

			}],

			[ 'ChallengesRewardingUserModel:', f => {

				const rewardNotify_1 = Mods.Packages.prop( f.prototype, 'rewardNotify', 1 );

				f.prototype[rewardNotify_1] = function () {};

			}],

			[ 'BattleSelectParkourWarningDialogComponent:', f => {

				const render = Mods.Packages.prop( f.prototype, 'render', 1 );

				f.prototype[ render ] = function () {

					const dispatch = Mods.Packages.prop( this.gateway_0, 'dispatch', 1 )
					const fight = Mods.Packages.get( 'ProBattleActions:' ).Fight;

					this.gateway_0[ dispatch ]( new fight( this.props.battleId, this.props.battleTeam ) );

				}

			}],

			[ 'BattleHudComponent:', f => {

				f.prototype.buttonsArea_0 = function () {};

			}],

			[ 'ActionsLogHudElement:', f => {

				const layout_1 = Mods.Packages.prop( f.prototype, 'layout', 1 );
				const layout = f.prototype[layout_1];

				f.prototype[layout_1] = function ( t ) {

					layout.bind( this )( t );

					this.y /= 2.22;

				}

			}],

			[ 'RugbyComponent', f => {

				const nfd_2 = Mods.Packages.prop( f.prototype, 'notifyFlagDelivered', 2 );
				const nfd = f.prototype[ nfd_2 ];

				f.prototype[ nfd_2 ] = function ( t, e ) {

					const
					gtq = Mods.Packages.get( 'messages.GetTeamQuery' ),
					send = Mods.Packages.get( 'entity.send_' ),
					ist = Mods.Packages.get( 'battle.isSameTeam_' ),
					bmc = Mods.Packages.get( 'BattleMessageContent:' );

					let i = ist( send( gtq, e ).team, this.getLocalTeam_0() )

					this.playSound_0( i, this.ballTakePositiveSoundPool_0, this.ballTakeNegativeSoundPool_0 );
					this.addBattleLogMessage_0( bmc.RUGBY_GOAL_BLUE, e, i )

				}

			}],

			[ 'JsonLocalizedLoader:', f => {

				const getValue_0 = f.getValue_0;

				f.getValue_0 = function ( ...args ) {

					if ( ! this.wasHooked ) {

						this.wasHooked = true;

						const bm = this.values_0['battle']['hud']['battle_message'];

						if ( bm['RUGBY_GOAL_BLUE'] == '%0 забила гол!' ) bm['RUGBY_GOAL_BLUE'] = '%0 забил гол!';
						if ( bm['RUGBY_GOAL_RED'] == '%0 забила гол!' ) bm['RUGBY_GOAL_RED'] = '%0 забил гол!';

					}

					return getValue_0.bind( this )( ...args );

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