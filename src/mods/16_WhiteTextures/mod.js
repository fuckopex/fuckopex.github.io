class Mod {

	name = 'WhiteTextures';
	type = 'T';
	title = 'WhiteTextures';
	desc = '';

	use () {

		Mods.ResReplace.use(

			[ /atlas\d?.webp/, `${ this.pwd }/atlas.webp` ],

		);

		Mods.Tanki.replace( /(this\.fileName=.,this\.textures=)(.)/, `$1Mods.${ this.name }.change($2)` );

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
			t.y = 1;
			t.x = 1;

		}

		return atlases;

	}

}

