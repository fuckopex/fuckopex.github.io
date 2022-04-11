class Mods {

	async launch ( urls, init, mod ) {

		urls = [

			'/src/mods/body/mod.js',
			'/src/mods/tanki/mod.js',
			'/src/mods/test/mod.js',
			'/src/mods/packages/mod.js',
			'/src/mods/replacer/mod.js',
			'/src/mods/garageoff/mod.js',
			'/src/mods/clearvision/mod.js',
			
		];

		init = [];

		for ( let url of urls ) {

			mod = ( await import( url ) ).default;

			this[ mod.name ] = mod;

			init.push( mod.init?.() );

		}

		await Promise.all( init );

	}

}

export default window._Mods = new Mods;