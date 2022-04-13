import Mods from '/src/Mods.js';

class Mod {

	name = 'Replacer';
	type = 'U';
	title = 'Замена ресурсов';
	desc = 'Таблица замен файлов на основе регулярных выражений';


	urls = [];
	hook = false;

	use ( urls ) {

		this.urls = urls.concat( this.urls );

		if ( ! this.hook++ ) {

			Mods.Tanki.replace( /(n\.p\+".+?")/g, `Mods.${ this.name }.match($1)` );
			Mods.Tanki.replace( /this\.local\$(url|path)=(.)/g, `this.local$$$1=Mods.${ this.name }.match($2)` );

		}

	}
	
	match ( url ) {

		for ( let e of this.urls )
			if ( url.match( e[0] ) ) return e[1];

		return url;

	}

}

export default new Mod;