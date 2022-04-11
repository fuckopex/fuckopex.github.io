import Mods from '/src/Mods.js';

class Mod {

	name = 'Replacer';
	type = 'U';
	title = 'Замена ресурсов';
	desc = 'Таблица замен файлов на основе регулярных выражений';

	urls = [];

	use ( urls, res ) {

		this.urls = this.urls.concat( urls );

		for ( let m of Array.from( Mods.Tanki.js.matchAll( /n\.p\+"(.+?)"/g ) ) ) {

			res = this.match( m[1] );

			if ( res !== m[1] ) Mods.Tanki.replace( m[0], `'${ res }'` );

		}

		Mods.Tanki.replace( /this.local\$(url|path)=(.)/g, 'this.local$$$1 = Mods.Replacer.match($2)' );

	}
	
	match ( url ) {

		for ( let e of this.urls )
			if ( url.match( e[0] ) ) return e[1];

		return url;

	}

}

export default new Mod;