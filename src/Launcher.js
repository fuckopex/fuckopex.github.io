class Launcher {

	constructor () {

		Promise.resolve()
		.then( () => this.init() )
		.then( () => this.use() )
		.then( () => this.launch() );

	}

	async init () {

		this.el = {};

		HTMLBodyElement.prototype.render = async function ( obj, fragment ) {

			document.body.replaceWith( document.createElement( 'body' ) );

			if ( obj === undefined ) return;

			if ( typeof obj === 'string' ) fragment = await fetch( obj )
				.then( r => r.text() )
				.then( t => document.createRange().createContextualFragment( t ) );

			if ( obj instanceof HTMLElement ) fragment = obj;

			document.body.append( fragment );

		}

	}

	async use () {

		await document.body.render( '/src/assets/launcher.html' );

		for ( let selector of [ 'list', 'viewer', 'title', 'label', 'desc', 'launch' ] )
			
			this.el[ selector ] = document.querySelector( `[mod-${ selector }]` );

	}

	async launch ( Mods ) {

		await import( '/src/Mods.js' ).then( m => Mods = m.default );

		for ( let mod of Object.values( Mods ) ) {

			this.el.mod = document.createElement( 'div' );
			this.el.mod.setAttribute( 'mod', '' );
			this.el.mod.setAttribute( 'mod-type', mod.type );
			this.el.mod.textContent = mod.title;
			this.el.mod.addEventListener( 'pointerup', e => {

				if ( e.button !== 0 ) return;

				this.el.viewer.setAttribute( 'mod-type', mod.type );
				this.el.title.textContent = mod.title;
				this.el.label.textContent = `[${ mod.type }]`;
				this.el.desc.textContent = mod.desc;
				this.el.launch.textContent = mod.launch ? 'Запуск ->' : '';
				this.el.launch.onpointerup = e => {

					if ( e.button !== 0 ) return;

					document.title = mod.title;
					document.body.render();
					
					mod.launch();

				}

			});

			this.el.list.append( this.el.mod );

		}

	}

}

export default new Launcher;