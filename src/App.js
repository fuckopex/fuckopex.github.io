class App {
	
	constructor () {

		Promise.resolve()
		.then( () => this.init() )
		.then( () => this.use() )
		.then( () => this.launch() )

	}

	async init ( packs, idb, names ) {

		packs = [ 'launcher', 'tanki' ];

		indexedDB.open( 'datapacks', 1 ).onupgradeneeded = e => {

			idb = e.target.result;
			names = idb.objectStoreNames;

			for ( let name of names ) idb.deleteObjectStore( name );
			for ( let pack of packs ) idb.createObjectStore( pack );
			
		};

	}

	async use ( register, worker ) {

		register = await navigator.serviceWorker.register( '/IMCache.js' );
		register = await register.update();

		worker = register.installing ?? register.waiting ?? register.active;
		worker.ready = () => worker.state == 'activated';

		await new Promise( resolve => {
			worker.addEventListener( 'statechange', () => worker.ready() && resolve() );
			worker.ready() && resolve();
		});

	}

	async launch () {

		await import( '/src/Launcher.js' );

	}

}

export default new App;