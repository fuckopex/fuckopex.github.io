let skyB0;

class Mod {

	name = 'WhiteTextures';
	type = 'C';
	title = 'WhiteTextures';
	desc = '';

	async init () {

		this.sky = await fetch( `${ this.pwd }/sky.webp` ).then( r => r.blob() );

	}

	use () {
	
		Mods.ResReplace.use(
			
			[ /cliff_0.3ds/, 						`${ this.pwd }/3ds/cliff/cliff_0.3ds` ],
			[ /cliff_1.3ds/, 						`${ this.pwd }/3ds/cliff/cliff_1.3ds` ],
			[ /cliff_2.3ds/, 						`${ this.pwd }/3ds/cliff/cliff_2.3ds` ],
			[ /cliff_4.3ds/, 						`${ this.pwd }/3ds/cliff/cliff_4.3ds` ],
			[ /cliff_c2.3ds/, 						`${ this.pwd }/3ds/cliff/cliff_c2.3ds` ],
			[ /cliff_cor.3ds/, 						`${ this.pwd }/3ds/cliff/cliff_cor.3ds` ],
			[ /cliff_r2.3ds/, 						`${ this.pwd }/3ds/cliff/cliff_r2.3ds` ],
			[ /cliff_ri.3ds/, 						`${ this.pwd }/3ds/cliff/cliff_ri.3ds` ],

			[ /brok_tank.3ds/, 						`${ this.pwd }/3ds/common/brok_tank.3ds` ],
			[ /fab_tow.3ds/, 						`${ this.pwd }/3ds/common/fab_tow.3ds` ],
			[ /fab_tow2.3ds/, 						`${ this.pwd }/3ds/common/fab_tow2.3ds` ],
			[ /nakhl.3DS/, 							`${ this.pwd }/3ds/common/nakhl.3DS` ],
			[ /tree01.3ds/, 						`${ this.pwd }/3ds/common/tree01.3ds` ],
			[ /tree02.3ds/, 						`${ this.pwd }/3ds/common/tree02.3ds` ],

			[ /nubu_1.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_1.3ds` ],
			[ /nubu_10.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_10.3ds` ],
			[ /nubu_12.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_12.3ds` ],
			[ /nubu_14.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_14.3ds` ],
			[ /nubu_2.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_2.3ds` ],
			[ /nubu_3.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_3.3ds` ],
			[ /nubu_4.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_4.3ds` ],
			[ /nubu_5.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_5.3ds` ],
			[ /nubu_6.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_6.3ds` ],
			[ /nubu_8.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_8.3ds` ],
			[ /nubu_9.3ds/, 						`${ this.pwd }/3ds/nubu/nubu_9.3ds` ],

			[ /234\/26561235334020\/badgir.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/badgir.3DS` ],
			[ /234\/26561235334020\/balaro.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/balaro.3DS` ],
			[ /234\/26561235334020\/broken.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/broken.3DS` ],
			[ /234\/26561235334020\/carpet.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/carpet.3DS` ],
			[ /234\/26561235334020\/darvaze.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/darvaze.3DS` ],
			[ /234\/26561235334020\/door.3DS/, 		`${ this.pwd }/3ds/iran/234/26561235334020/door.3DS` ],
			[ /234\/26561235334020\/end.3DS/, 		`${ this.pwd }/3ds/iran/234/26561235334020/end.3DS` ],
			[ /234\/26561235334020\/gonbad.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/gonbad.3DS` ],
			[ /234\/26561235334020\/gonbadMJ.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/gonbadMJ.3DS` ],
			[ /234\/26561235334020\/in.3DS/, 		`${ this.pwd }/3ds/iran/234/26561235334020/in.3DS` ],
			[ /234\/26561235334020\/mehrab.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/mehrab.3DS` ],
			[ /234\/26561235334020\/menare.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/menare.3DS` ],
			[ /234\/26561235334020\/out.3DS/, 		`${ this.pwd }/3ds/iran/234/26561235334020/out.3DS` ],
			[ /234\/26561235334020\/outWd.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/outWd.3DS` ],
			[ /234\/26561235334020\/saye.3DS/, 		`${ this.pwd }/3ds/iran/234/26561235334020/saye.3DS` ],
			[ /234\/26561235334020\/stair.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/stair.3DS` ],
			[ /234\/26561235334020\/tagh.3DS/, 		`${ this.pwd }/3ds/iran/234/26561235334020/tagh.3DS` ],
			[ /234\/26561235334020\/wall.3DS/, 		`${ this.pwd }/3ds/iran/234/26561235334020/wall.3DS` ],
			[ /234\/26561235334020\/window.3DS/, 	`${ this.pwd }/3ds/iran/234/26561235334020/window.3DS` ],
			[ /234\/26561235334020\/wood.3DS/, 		`${ this.pwd }/3ds/iran/234/26561235334020/wood.3DS` ],

			[ /236\/26561301070311\/corner.3DS/, 	`${ this.pwd }/3ds/iran/236/26561301070311/corner.3DS` ],
			[ /236\/26561301070311\/door.3DS/, 		`${ this.pwd }/3ds/iran/236/26561301070311/door.3DS` ],
			[ /236\/26561301070311\/end.3DS/, 		`${ this.pwd }/3ds/iran/236/26561301070311/end.3DS` ],
			[ /236\/26561301070311\/in.3DS/, 		`${ this.pwd }/3ds/iran/236/26561301070311/in.3DS` ],
			[ /236\/26561301070311\/outWd.3DS/, 	`${ this.pwd }/3ds/iran/236/26561301070311/outWd.3DS` ],
			[ /236\/26561301070311\/wall.3DS/, 		`${ this.pwd }/3ds/iran/236/26561301070311/wall.3DS` ],
			[ /236\/26561301070311\/window.3DS/, 	`${ this.pwd }/3ds/iran/236/26561301070311/window.3DS` ],

			[ /26561157363460\/big_rock.3ds/, 		`${ this.pwd }/3ds/rock1/big_rock.3ds` ],
			[ /26561157363460\/corn1.3ds/, 			`${ this.pwd }/3ds/rock1/corn1.3ds` ],
			[ /26561157363460\/sm_rock1.3ds/, 		`${ this.pwd }/3ds/rock1/sm_rock1.3ds` ],
			[ /26561157363460\/sm_rock2.3ds/, 		`${ this.pwd }/3ds/rock1/sm_rock2.3ds` ],
			[ /26561157363460\/up_rock.3ds/, 		`${ this.pwd }/3ds/rock1/up_rock.3ds` ],

			[ /26561247720314\/big_rock.3ds/, 		`${ this.pwd }/3ds/rock2/big_rock.3ds` ],
			[ /26561247720314\/corn1.3ds/, 			`${ this.pwd }/3ds/rock2/corn1.3ds` ],
			[ /26561247720314\/sm_rock1.3ds/, 		`${ this.pwd }/3ds/rock2/sm_rock1.3ds` ],

			[ /gasoline.3ds/, 						`${ this.pwd }/3ds/smhou/gasoline.3ds` ],
			[ /smhouse2.3ds/, 						`${ this.pwd }/3ds/smhou/smhouse2.3ds` ],
			[ /smhouse3.3ds/, 						`${ this.pwd }/3ds/smhou/smhouse3.3ds` ],
			[ /smhouse4.3ds/, 						`${ this.pwd }/3ds/smhou/smhouse4.3ds` ],
			[ /smhouse5.3ds/, 						`${ this.pwd }/3ds/smhou/smhouse5.3ds` ],
			[ /vilhou_1.3ds/, 						`${ this.pwd }/3ds/smhou/vilhou_1.3ds` ],
			[ /vilhou_2.3ds/, 						`${ this.pwd }/3ds/smhou/vilhou_2.3ds` ],
			[ /vilhou_3.3ds/, 						`${ this.pwd }/3ds/smhou/vilhou_3.3ds` ],
			[ /vilhou_4.3ds/, 						`${ this.pwd }/3ds/smhou/vilhou_4.3ds` ],

			[ /brid_1.3ds/, 						`${ this.pwd }/3ds/brid_1.3ds` ],
			[ /brid_1_1.3ds/, 						`${ this.pwd }/3ds/brid_1_1.3ds` ],
			[ /brid_1_2.3ds/, 						`${ this.pwd }/3ds/brid_1_2.3ds` ],
			[ /brid_1_3.3ds/, 						`${ this.pwd }/3ds/brid_1_3.3ds` ],
			[ /brid_3.3ds/, 						`${ this.pwd }/3ds/brid_3.3ds` ],
			[ /brid_4.3ds/, 						`${ this.pwd }/3ds/brid_4.3ds` ],
			[ /brid_5.3ds/, 						`${ this.pwd }/3ds/brid_5.3ds` ],
			[ /brid_6.3ds/, 						`${ this.pwd }/3ds/brid_6.3ds` ],
			[ /brid_7.3ds/, 						`${ this.pwd }/3ds/brid_7.3ds` ],
			[ /camera.3ds/, 						`${ this.pwd }/3ds/camera.3ds` ],
			[ /cbr_pil.3ds/, 						`${ this.pwd }/3ds/cbr_pil.3ds` ],
			[ /fahwerk1.3ds/, 						`${ this.pwd }/3ds/fahwerk1.3ds` ],
			[ /fahwerk2.3ds/, 						`${ this.pwd }/3ds/fahwerk2.3ds` ],
			[ /hang_1.3ds/, 						`${ this.pwd }/3ds/hang_1.3ds` ],
			[ /hang_3.3ds/, 						`${ this.pwd }/3ds/hang_3.3ds` ],
			[ /hs_tube2.3ds/, 						`${ this.pwd }/3ds/hs_tube2.3ds` ],
			[ /lighttow.3ds/, 						`${ this.pwd }/3ds/lighttow.3ds` ],
			[ /ow_t.3ds/, 							`${ this.pwd }/3ds/ow_t.3ds` ],
			[ /pillar_d.3ds/, 						`${ this.pwd }/3ds/pillar_d.3ds` ],
			[ /rise_g1.3ds/, 						`${ this.pwd }/3ds/rise_g1.3ds` ],
			[ /rise_g2.3ds/, 						`${ this.pwd }/3ds/rise_g2.3ds` ],
			[ /rise_g3.3ds/, 						`${ this.pwd }/3ds/rise_g3.3ds` ],
			[ /tower.3ds/, 							`${ this.pwd }/3ds/tower.3ds` ],
			[ /tower_corner.3ds/, 					`${ this.pwd }/3ds/tower_corner.3ds` ],
			[ /tower_roof.3ds/, 					`${ this.pwd }/3ds/tower_roof.3ds` ],
			[ /tube_1.3ds/, 						`${ this.pwd }/3ds/tube_1.3ds` ],
			[ /tube_2.3ds/, 						`${ this.pwd }/3ds/tube_2.3ds` ],
			[ /tube_3.3ds/, 						`${ this.pwd }/3ds/tube_3.3ds` ],
			[ /tube_4.3ds/, 						`${ this.pwd }/3ds/tube_4.3ds` ],
			[ /up_rock.3ds/, 						`${ this.pwd }/3ds/up_rock.3ds` ],
			[ /wall.3ds/, 							`${ this.pwd }/3ds/wall.3ds` ],
			[ /wall_2.3ds/, 						`${ this.pwd }/3ds/wall_2.3ds` ],
			[ /wall_3.3ds/, 						`${ this.pwd }/3ds/wall_3.3ds` ],
			[ /wall_broken_1.3ds/, 					`${ this.pwd }/3ds/wall_broken_1.3ds` ],
			[ /wall_broken_2.3ds/, 					`${ this.pwd }/3ds/wall_broken_2.3ds` ],
			[ /wall_cor_out.3ds/, 					`${ this.pwd }/3ds/wall_cor_out.3ds` ],
			[ /wall_end_1.3ds/, 					`${ this.pwd }/3ds/wall_end_1.3ds` ],
			[ /wall_end_2.3ds/, 					`${ this.pwd }/3ds/wall_end_2.3ds` ],
			[ /wall_short.3ds/, 					`${ this.pwd }/3ds/wall_short.3ds` ],
			[ /watch_to.3ds/, 						`${ this.pwd }/3ds/watch_to.3ds` ],
			[ /wgates.3ds/, 						`${ this.pwd }/3ds/wgates.3ds` ],
			[ /wlb_rise.3ds/, 						`${ this.pwd }/3ds/wlb_rise.3ds` ],

		);

		Mods.ResReplace.use(

			[ /atlas\d?.webp/, `${ this.pwd }/atlas.webp` ],

		);

		Mods.Packages.use(

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

				const createSkyBox_0 = f.prototype.createSkyBox_0;

				f.prototype.createSkyBox_0 = function () {

					this.skyboxSides_0.right._texture = skyB0;
					this.skyboxSides_0.left._texture = skyB0;
					this.skyboxSides_0.top._texture = skyB0;
					this.skyboxSides_0.bottom._texture = skyB0;
					this.skyboxSides_0.front._texture = skyB0;
					this.skyboxSides_0.back._texture = skyB0;

					return createSkyBox_0.bind( this )();

				}

			}],

			[ 'Bitmap:', async Bitmap => {

				const skyIB = await createImageBitmap( this.sky );
				const skyB = new Bitmap( skyIB, 1, 1 );
				const BT = Mods.Packages.get( 'BitmapTexture:' );

				skyB0 = new BT( skyB );

			}],

		);

		Mods.Tanki.replace( /(return .\.atlases=)(.)/, `$1Mods.${ this.name }.change($2)` );

	}

	launch () {

		this.use();

		Mods.Tanki.use();

	}

	change ( atlases ) {

		for ( let a of atlases.toArray() )
		for ( let t of a.textures.toArray() ) {

			t.width = 32;
			t.height = 32;
			t.y = 0;
			t.x = 0;

		}

		return atlases;

	}

}