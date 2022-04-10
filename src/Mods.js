class Mods {

	async launch ( mods ) {

		mods = [

			{ name: 'Tanki', 	path: '/src/mods/tanki/mod.js' },
			//{ name: 'Test2', 	path: '/src/mods/test2.js' },
			{ name: 'Test', 	path: '/src/mods/test/mod.js' },
			{ name: 'Replacer', path: '/src/mods/replacer/mod.js' },
			{ name: 'Packages', path: '/src/mods/packages/mod.js' },
			
		];

		for ( let m of mods ) {
			
			this[ m.name ] = ( await import( m.path ) ).default;
			this[ m.name ].path = m.path;

		}

	}

}

export default window.ggg = new Mods;