import Mods from '/src/Mods.js';

class Replacer {

	type = "U";
	name = "Замена ресурсов";
	desc = "Таблица замен файлов на основе регулярных выражений";

	urls = [];

	use ( urls ) {

		this.urls = this.urls.concat( urls );

		for ( let match of Array.from( Mods.Tanki.js.matchAll( /n\.p\+"(.+?)"/g ) ) ) {

			const res = this.match( match[1] );

			if ( res !== match[1] )
				Mods.Tanki.replace( match[0], `"${ res }"` );

		}

		Mods.Tanki.replace( /this.local\$(url|path)=(.)/g, 'this.local$$$1 = Mods.Replacer.match($2)' );

	}
	
	match ( url ) {

		for ( let e of this.urls )
			if ( url.match( e[0] ) ) return e[1];

		return url;

	}

}

export default window.gg = new Replacer;