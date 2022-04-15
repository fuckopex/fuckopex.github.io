class Mod {

	name = 'ResReplace';
	type = 'U';
	title = 'Замена ресурсов';
	desc = 'Таблица замен файлов на основе регулярных выражений';


	urls = [];

	use ( ...urls ) {

		if ( ! this.used && ( this.used = true ) ) {

			Mods.Tanki.replace( /(n\.p\+".+?")/g, `Mods.${ this.name }.match($1)` );
			Mods.Tanki.replace( /this\.local\$(url|path)=(.)/g, `this.local$$$1=Mods.${ this.name }.match($2)` );

		}

		this.urls = urls.concat( this.urls );

	}
	
	match ( url ) {

		for ( let e of this.urls )
			if ( url.match( e[0] ) ) return e[1];

		return url;

	}

}

export default new Mod;