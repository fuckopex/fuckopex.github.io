class Mod {
	
	name = 'PackageViewer';
	type = 'U';
	title = 'Список пакетов';
	desc = '';

	launch () {

		Mods.Packages.use( [ 'launcher.main:', ( f => this.render() ).bind( this ) ] );
		Mods.Tanki.replace( /,.{2,3}\(\)}\(t.exports/, '}(t.exports' );
		Mods.Tanki.use();

	}

	async render () {

		await document.body.render( `${ this.pwd }/body.html` );

		const text = document.querySelector( '[text]' );
		const input = document.querySelector( 'input' );

		const filter = () => text.textContent = Mods.Packages.list( input.value );

		input.addEventListener( 'change', filter ); filter();

		document.addEventListener( 'keydown', event => {

			if ( event.key == 'F2' ) {

				console.log( Mods.Packages.get( document.getSelection().toString() ) )

			}

		})

	}

}