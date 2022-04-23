class Mod {

	name = 'BetterCollisions';
	type = 'T';
	title = 'BetterCollisions';
	desc = '';

	use () {

		Mods.ResReplace.use(

			[ /cliff_0.3ds/, 		`${ this.pwd }/temp/part3/cliff_0.3ds` ],
			[ /cliff_1.3ds/, 		`${ this.pwd }/temp/part3/cliff_1.3ds` ],
			[ /cliff_2.3ds/, 		`${ this.pwd }/temp/part3/cliff_2.3ds` ],
			[ /cliff_c2.3ds/, 		`${ this.pwd }/temp/part3/cliff_c2.3ds` ],
			[ /cliff_cor.3ds/, 		`${ this.pwd }/temp/part3/cliff_cor.3ds` ],
			[ /cliff_ri.3ds/, 		`${ this.pwd }/temp/part3/cliff_ri.3ds` ],

			[ /brok_tank.3ds/, 		`${ this.pwd }/temp/part1/brok_tank.3ds` ],
			[ /nakhl.3DS/, 			`${ this.pwd }/temp/part1/nakhl.3DS` ],
			[ /tree01.3ds/, 		`${ this.pwd }/temp/part1/tree01.3ds` ],
			[ /tree02.3ds/, 		`${ this.pwd }/temp/part1/tree02.3ds` ],
			[ /wall_broken_1.3ds/, 	`${ this.pwd }/temp/part1/wall_broken_1.3ds` ],
			[ /wall_broken_2.3ds/, 	`${ this.pwd }/temp/part1/wall_broken_2.3ds` ],
			[ /wall_cor_out.3ds/, 	`${ this.pwd }/temp/part1/wall_cor_out.3ds` ],
			[ /watch_to.3ds/, 		`${ this.pwd }/temp/part1/watch_to.3ds` ],
			[ /wgates.3ds/, 		`${ this.pwd }/temp/part1/wgates.3ds` ],
			[ /wlb_rise.3ds/, 		`${ this.pwd }/temp/part1/wlb_rise.3ds` ],

			[ /26561235334020\/badgir.3DS/, 	`${ this.pwd }/temp/part2/26561235334020/badgir.3DS` ],
			[ /26561235334020\/balaro.3DS/, 	`${ this.pwd }/temp/part2/26561235334020/balaro.3DS` ],
			[ /26561235334020\/broken.3DS/, 	`${ this.pwd }/temp/part2/26561235334020/broken.3DS` ],
			[ /26561235334020\/carpet.3DS/, 	`${ this.pwd }/temp/part2/26561235334020/carpet.3DS` ],
			[ /26561235334020\/darvaze.3DS/, 	`${ this.pwd }/temp/part2/26561235334020/darvaze.3DS` ],
			[ /26561235334020\/door.3DS/, 		`${ this.pwd }/temp/part2/26561235334020/door.3DS` ],
			[ /26561235334020\/end.3DS/, 		`${ this.pwd }/temp/part2/26561235334020/end.3DS` ],
			[ /26561235334020\/gonbad.3DS/, 	`${ this.pwd }/temp/part2/26561235334020/gonbad.3DS` ],
			[ /26561235334020\/gonbadMJ.3DS/, 	`${ this.pwd }/temp/part2/26561235334020/gonbadMJ.3DS` ],
			[ /26561235334020\/in.3DS/, 		`${ this.pwd }/temp/part2/26561235334020/in.3DS` ],
			[ /26561235334020\/mehrab.3DS/, 	`${ this.pwd }/temp/part2/26561235334020/mehrab.3DS` ],
			[ /26561235334020\/menare.3DS/, 	`${ this.pwd }/temp/part2/26561235334020/menare.3DS` ],
			[ /26561235334020\/out.3DS/, 		`${ this.pwd }/temp/part2/26561235334020/out.3DS` ],
			[ /26561235334020\/outWd.3DS/, 		`${ this.pwd }/temp/part2/26561235334020/outWd.3DS` ],
			[ /26561235334020\/saye.3DS/, 		`${ this.pwd }/temp/part2/26561235334020/saye.3DS` ],
			[ /26561235334020\/stair.3DS/, 		`${ this.pwd }/temp/part2/26561235334020/stair.3DS` ],
			[ /26561235334020\/tagh.3DS/, 		`${ this.pwd }/temp/part2/26561235334020/tagh.3DS` ],
			[ /26561235334020\/wall.3DS/, 		`${ this.pwd }/temp/part2/26561235334020/wall.3DS` ],
			[ /26561235334020\/window.3DS/, 	`${ this.pwd }/temp/part2/26561235334020/window.3DS` ],
			[ /26561235334020\/wood.3DS/, 		`${ this.pwd }/temp/part2/26561235334020/wood.3DS` ],

			[ /26561301070311\/corner.3DS/, 	`${ this.pwd }/temp/part2/26561301070311/corner.3DS` ],
			[ /26561301070311\/door.3DS/, 		`${ this.pwd }/temp/part2/26561301070311/door.3DS` ],
			[ /26561301070311\/end.3DS/, 		`${ this.pwd }/temp/part2/26561301070311/end.3DS` ],
			[ /26561301070311\/in.3DS/, 		`${ this.pwd }/temp/part2/26561301070311/in.3DS` ],
			[ /26561301070311\/outWd.3DS/, 		`${ this.pwd }/temp/part2/26561301070311/outWd.3DS` ],
			[ /26561301070311\/wall.3DS/, 		`${ this.pwd }/temp/part2/26561301070311/wall.3DS` ],
			[ /26561301070311\/window.3DS/, 	`${ this.pwd }/temp/part2/26561301070311/window.3DS` ],

		);

	}

}