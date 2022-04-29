class Mod {

	name = 'ResReplace';
	type = 'U';
	title = 'Замена ресурсов';
	desc = 'Таблица замен файлов на основе регулярных выражений';


	urls = [];

	use ( ...urls ) {

		if ( ! this.used && ( this.used = true ) ) {

			const mod = this;

			Mods.Tanki.replace( /(n\.p\+".+?")/g, `Mods.${ this.name }.match($1)` );
			Mods.Tanki.replace( /"url\('"\+(.)\+"'\)"/, `"url('"+Mods.${ this.name }.match($1)+"')"` );
			Mods.Tanki.replace( /window.fetch\((.+?)\)/g, `Mods.${ this.name }.fetch($1)` );

			const setAttribute = HTMLImageElement.prototype.setAttribute;

			HTMLImageElement.prototype.setAttribute = function ( name, value ) {

				if ( name == 'src' ) value = mod.match( value );

				return setAttribute.bind( this )( name, value );

			}

		}

		this.urls = urls.reverse().concat( this.urls );

	}
	
	match ( url ) {

		for ( let e of this.urls )
			if ( url.match( e[0] ) ) return e[1];

		return url;

	}

	fetch ( url ) {

		return window.fetch( this.match( url ) );

	}

}