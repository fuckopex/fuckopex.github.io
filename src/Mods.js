class Mods {

	constructor () {

		this.ready = this.init();

	}

	async init ( dir, name, urls ) {

		dir = '/src/mods/';
		name = '/mod.js';

		urls = [

			dir + 'Test' 					+ name,
			dir + 'Tanki' 					+ name,
			dir + 'BetterUI' 				+ name,
			dir + 'BetterChat' 				+ name,
			dir + 'BetterVisibility' 		+ name,
		//	dir + 'BetterCollisions' 		+ name,
			dir + 'EmptyLobby' 				+ name,
			dir + 'TinselOff' 				+ name,
			dir + 'WhiteTextures' 			+ name,
		//	dir + 'OldSounds' 				+ name,
			dir + 'CheatVisibility' 		+ name,
		//	dir + 'CheatPhysic' 			+ name,
			dir + 'CheatWeapon' 			+ name,
			dir + 'BeautifyMJS' 			+ name,
			dir + 'DebugMJS' 				+ name,
			dir + 'PackageViewer' 			+ name,
		//	dir + 'ResourceViewer' 			+ name,
			dir + 'Packages' 				+ name,
			dir + 'Resources' 				+ name,
			
		];

		for ( let url of urls ) await this.load( url );

	}

	async load ( url, blob, mod ) {

		blob = new Blob( [

			`import Mods from '${ window.location.origin }/src/Mods.js';
			${ await fetch( url ).then( r => r.text() ) }
			export default new Mod;`

		], { type: 'application/javascript' } );


		mod = await import( URL.createObjectURL( blob ) ).then( m => m.default );
		mod.pwd = window.location.origin + url.replace( '/' + url.split( '/' ).pop(), '' );
		await mod.init?.();
		this[ mod.name ] = mod;

		return mod;

	}

}

export default window.Mods = new Mods;