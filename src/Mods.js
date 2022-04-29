class Mods {

	async init ( dir, name, urls ) {

		dir = '/src/mods/';
		name = '/mod.js';

		urls = [

			dir + '01_Test' 				+ name,
			dir + '02_JSasMod' 				+ name,
			dir + '03_Tanki' 				+ name,
			dir + '04_BeautyMJS' 			+ name,
			dir + '05_DebugMJS' 			+ name,
			dir + '06_Packages' 			+ name,
			dir + '07_ResReplace' 			+ name,
			dir + '08_PkgViewer' 			+ name,
			dir + '09_GarageOff' 			+ name,
			dir + '10_BetterUI' 			+ name,
			dir + '11_BetterChat' 			+ name,
			dir + '12_BetterVisibility' 	+ name,
			dir + '13_TinselOff' 			+ name,
		//	dir + '14_BetterCollisions' 	+ name,
			dir + '15_CheatVisibility' 		+ name,
			dir + '16_WhiteTextures' 		+ name,
			dir + '17_CheatWeapon' 			+ name,
		//	dir + '18_CheatPhysic' 			+ name,
			
		];

		for ( let url of urls ) await this.load( url );

	}

	async load ( url, imp, txt, exp, js, blob, mod ) {

		imp = `import Mods from '${ window.location.origin }/src/Mods.js';`;
		txt = await fetch( url ).then( r => r.text() );
		exp = `export default new Mod;`;

		js = `${ imp }\n${ txt }\n${ exp }`;

		blob = new Blob( [ js ], { type: 'application/javascript' } );
		mod = await import( URL.createObjectURL( blob ) ).then( m => m.default );

		mod.pwd = window.location.origin + url.replace( '/' + url.split( '/' ).pop(), '' );
		await mod.init?.();
		this[ mod.name ] = mod;

		return mod;

	}

}

export default window._Mods = new Mods;