class Mod {

	name = 'Tanki';
	type = 'T';
	title = 'Танки Онлайн';
	desc = 'Чистый клиент';
	

	async init ( url, index, css, js ) {

		url 	= 'https://tankionline.com/play/';
		index 	= await fetch( url ).then( r => r.text() );
		css 	= `${ url }${ index.match( /static\/css\/main\.[0-9a-f]{8}\.css/ ) }`;
		js 		= `${ url }${ index.match( /static\/js\/main\.[0-9a-f]{8}\.js/ ) }`;

		this.css = css;

		this.js = `import Mods from '${ window.location.origin }/src/Mods.js';\n` +

			( await fetch( js ).then( r => r.text() ) )
				.replace( `e=window.location.href`, `e='${ url }'` )
				.replace( `/play/`, url )
				.replace( `"3dtank"`, `''` );

	}

	async use ( blob, url ) {

		await document.body.render( `${ this.pwd }/play.html` );

		document.querySelector( '[main-css]' ).href = this.css;
		document.querySelector( 'html' ).classList.add( 'GlobalStyle-html' );
		document.querySelector( 'body' ).classList.add( 'GlobalStyle-body' );

		window.fbq = () => null;
		window.gtag = () => null;

		blob = new Blob( [ this.js ], { type: 'application/javascript' } );
		url = URL.createObjectURL( blob );

		document.querySelector( '[main-js]' ).src = url;

	}

	launch () {

		this.use();

	}

	replace ( f, r ) {

		this.js = this.js.replace( f, r );

	}

}