class Mod {

	name = 'WhiteTextures';
	type = 'C';
	title = 'WhiteTextures';
	desc = '';

	use () {
	
		Mods.ResReplace.use(
			
			[ /brid_1.3ds/, 		`${ this.pwd }/3ds/brid_1.3ds` ],
			[ /brid_1_1.3ds/, 		`${ this.pwd }/3ds/brid_1_1.3ds` ],
			[ /brid_1_2.3ds/, 		`${ this.pwd }/3ds/brid_1_2.3ds` ],
			[ /brid_1_3.3ds/, 		`${ this.pwd }/3ds/brid_1_3.3ds` ],
			[ /brid_3.3ds/, 		`${ this.pwd }/3ds/brid_3.3ds` ],
			[ /brid_4.3ds/, 		`${ this.pwd }/3ds/brid_4.3ds` ],
			[ /brid_5.3ds/, 		`${ this.pwd }/3ds/brid_5.3ds` ],
			[ /brid_6.3ds/, 		`${ this.pwd }/3ds/brid_6.3ds` ],
			[ /brid_7.3ds/, 		`${ this.pwd }/3ds/brid_7.3ds` ],
			[ /brok_tank.3ds/, 		`${ this.pwd }/3ds/brok_tank.3ds` ],
			[ /camera.3ds/, 		`${ this.pwd }/3ds/camera.3ds` ],
			[ /cbr_pil.3ds/, 		`${ this.pwd }/3ds/cbr_pil.3ds` ],
			[ /cliff_0.3ds/, 		`${ this.pwd }/3ds/cliff_0.3ds` ],
			[ /cliff_1.3ds/, 		`${ this.pwd }/3ds/cliff_1.3ds` ],
			[ /cliff_2.3ds/, 		`${ this.pwd }/3ds/cliff_2.3ds` ],
			[ /cliff_4.3ds/, 		`${ this.pwd }/3ds/cliff_4.3ds` ],
			[ /cliff_c2.3ds/, 		`${ this.pwd }/3ds/cliff_c2.3ds` ],
			[ /cliff_cor.3ds/, 		`${ this.pwd }/3ds/cliff_cor.3ds` ],
			[ /cliff_r2.3ds/, 		`${ this.pwd }/3ds/cliff_r2.3ds` ],
			[ /cliff_ri.3ds/, 		`${ this.pwd }/3ds/cliff_ri.3ds` ],
			[ /fahwerk.3ds/, 		`${ this.pwd }/3ds/fahwerk.3ds` ],
			[ /fahwerk2.3ds/, 		`${ this.pwd }/3ds/fahwerk2.3ds` ],
			[ /gasoline.3ds/, 		`${ this.pwd }/3ds/gasoline.3ds` ],
			[ /hang_1.3ds/, 		`${ this.pwd }/3ds/hang_1.3ds` ],
			[ /hang_3.3ds/, 		`${ this.pwd }/3ds/hang_3.3ds` ],
			[ /hs_tube2.3ds/, 		`${ this.pwd }/3ds/hs_tube2.3ds` ],
			[ /lighttow.3ds/, 		`${ this.pwd }/3ds/lighttow.3ds` ],
			[ /nakhl.3DS/, 			`${ this.pwd }/3ds/nakhl.3DS` ],
			[ /nubu_1.3ds/, 		`${ this.pwd }/3ds/nubu_1.3ds` ],
			[ /nubu_10.3ds/, 		`${ this.pwd }/3ds/nubu_10.3ds` ],
			[ /nubu_12.3ds/, 		`${ this.pwd }/3ds/nubu_12.3ds` ],
			[ /nubu_14.3ds/, 		`${ this.pwd }/3ds/nubu_14.3ds` ],
			[ /nubu_2.3ds/, 		`${ this.pwd }/3ds/nubu_2.3ds` ],
			[ /nubu_3.3ds/, 		`${ this.pwd }/3ds/nubu_3.3ds` ],
			[ /nubu_4.3ds/, 		`${ this.pwd }/3ds/nubu_4.3ds` ],
			[ /nubu_5.3ds/, 		`${ this.pwd }/3ds/nubu_5.3ds` ],
			[ /nubu_6.3ds/, 		`${ this.pwd }/3ds/nubu_6.3ds` ],
			[ /nubu_8.3ds/, 		`${ this.pwd }/3ds/nubu_8.3ds` ],
			[ /nubu_9.3ds/, 		`${ this.pwd }/3ds/nubu_9.3ds` ],
			[ /ow_t.3ds/, 			`${ this.pwd }/3ds/ow_t.3ds` ],
			[ /pillar_d.3ds/, 		`${ this.pwd }/3ds/pillar_d.3ds` ],
			[ /rise_g1.3ds/, 		`${ this.pwd }/3ds/rise_g1.3ds` ],
			[ /rise_g2.3ds/, 		`${ this.pwd }/3ds/rise_g2.3ds` ],
			[ /rise_g3.3ds/, 		`${ this.pwd }/3ds/rise_g3.3ds` ],
			[ /sm_rock1.3ds/, 		`${ this.pwd }/3ds/sm_rock1.3ds` ],
			[ /sm_rock2.3ds/, 		`${ this.pwd }/3ds/sm_rock2.3ds` ],
			[ /smhouse2.3ds/, 		`${ this.pwd }/3ds/smhouse2.3ds` ],
			[ /smhouse3.3ds/, 		`${ this.pwd }/3ds/smhouse3.3ds` ],
			[ /smhouse4.3ds/, 		`${ this.pwd }/3ds/smhouse4.3ds` ],
			[ /smhouse5.3ds/, 		`${ this.pwd }/3ds/smhouse5.3ds` ],
			[ /tile2sd.3ds/, 		`${ this.pwd }/3ds/tile2sd.3ds` ],
			[ /tower.3ds/, 			`${ this.pwd }/3ds/tower.3ds` ],
			[ /tower_corner.3ds/, 	`${ this.pwd }/3ds/tower_corner.3ds` ],
			[ /tower_roof.3ds/, 	`${ this.pwd }/3ds/tower_roof.3ds` ],
			[ /tree01.3ds/, 		`${ this.pwd }/3ds/tree01.3ds` ],
			[ /tree02.3ds/, 		`${ this.pwd }/3ds/tree02.3ds` ],
			[ /tube_1.3ds/, 		`${ this.pwd }/3ds/tube_1.3ds` ],
			[ /tube_2.3ds/, 		`${ this.pwd }/3ds/tube_2.3ds` ],
			[ /tube_3.3ds/, 		`${ this.pwd }/3ds/tube_3.3ds` ],
			[ /tube_4.3ds/, 		`${ this.pwd }/3ds/tube_4.3ds` ],
			[ /up_rock.3ds/, 		`${ this.pwd }/3ds/up_rock.3ds` ],
			[ /vilhou_1.3ds/, 		`${ this.pwd }/3ds/vilhou_1.3ds` ],
			[ /vilhou_2.3ds/, 		`${ this.pwd }/3ds/vilhou_2.3ds` ],
			[ /vilhou_3.3ds/, 		`${ this.pwd }/3ds/vilhou_3.3ds` ],
			[ /vilhou_4.3ds/, 		`${ this.pwd }/3ds/vilhou_4.3ds` ],
			[ /wall.3ds/, 			`${ this.pwd }/3ds/wall.3ds` ],
			[ /wall_2.3ds/, 		`${ this.pwd }/3ds/wall_2.3ds` ],
			[ /wall_3.3ds/, 		`${ this.pwd }/3ds/wall_3.3ds` ],
			[ /wall_broken_1.3ds/, 	`${ this.pwd }/3ds/wall_broken_1.3ds` ],
			[ /wall_broken_2.3ds/, 	`${ this.pwd }/3ds/wall_broken_2.3ds` ],
			[ /wall_cor_out.3ds/, 	`${ this.pwd }/3ds/wall_cor_out.3ds` ],
			[ /wall_end_1.3ds/, 	`${ this.pwd }/3ds/wall_end_1.3ds` ],
			[ /wall_end_2.3ds/, 	`${ this.pwd }/3ds/wall_end_2.3ds` ],
			[ /wall_short.3ds/, 	`${ this.pwd }/3ds/wall_short.3ds` ],
			[ /watch_to.3ds/, 		`${ this.pwd }/3ds/watch_to.3ds` ],
			[ /wgates.3ds/, 		`${ this.pwd }/3ds/wgates.3ds` ],
			[ /wlb_rise.3ds/, 		`${ this.pwd }/3ds/wlb_rise.3ds` ],

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

			t.width = window.GG.w ?? 4;
			t.height = window.GG.h ?? 4;
			t.y = window.GG.y ?? Math.floor( Math.random() *3 )*4;
			t.x = window.GG.x ?? Math.floor( Math.random() *7 )*4;

		}

		return atlases;

	}

}

window.GG = {
	w: 32,
	h: 32,
	y: 0,
	x: 0,
};