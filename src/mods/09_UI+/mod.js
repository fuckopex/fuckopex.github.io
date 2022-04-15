class Mod {

	name = 'UI+';
	type = 'T';
	title = 'Интерфейс+';
	desc = 'типа описание';


	use () {

		Mods.ResReplace.use(

			[ /background\/.+?webp/, 	`${ this.pwd }/bg.webp` ],
			[ /videoplay.+?webp/, 		`${ this.pwd }/transparent.webp` ],

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

			[ 'AnnouncementHomeScreenComponent:', f => {

				f.prototype.componentDidMount = function () {};

			}],

			[ 'ChallengesRewardingUserModel:', f => {

				const rewardNotify_1 = Mods.Packages.prop( f.prototype, 'rewardNotify', 1 );

				f.prototype[rewardNotify_1] = function () {};

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

			[ 'BattleSelectParkourWarningDialogComponent:', f => {

				const render = Mods.Packages.prop( f.prototype, 'render', 1 );

				f.prototype[ render ] = function () {

					const dispatch = Mods.Packages.prop( this.gateway_0, 'dispatch', 1 )
					const fight = Mods.Packages.get( 'ProBattleActions:' ).Fight;

					this.gateway_0[ dispatch ]( new fight( this.props.battleId, this.props.battleTeam ) );

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