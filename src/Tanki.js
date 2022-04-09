import Block from '/src/Block.js';

class Tanki extends Block {

	async init ( url, index, css, js ) {

		await this.render( '/src/assets/tanki-view.html' );


		url 	= 'https://tankionline.com/play/';
		index 	= await fetch( url ).then( r => r.text() );
		css 	= `${ url }${ index.match( /static\/css\/main\.[0-9a-f]{8}\.css/ ) }`;
		js 		= `${ url }${ index.match( /static\/js\/main\.[0-9a-f]{8}\.js/ ) }`;


		document.querySelector( '[main-css]' ).href = css;

		document.querySelector( 'html' ).classList.add( 'GlobalStyle-html' );
		document.querySelector( 'body' ).classList.add( 'GlobalStyle-body' );


		this.mainJS = `import Mods from '${ window.location.origin }/src/Mods.js';\n` +

			( await fetch( js ).then( r => r.text() ) )
				.replace( `e=window.location.href`, `e='${ url }'` )
				.replace( `/play/`, url )
				.replace( `"3dtank"`, `''` );


		window.fbq = () => null;
		window.gtag = () => null;

	}

	async launch ( blob, url ) {

		blob = new Blob( [ this.mainJS ], { type: "application/javascript" } );
		url = URL.createObjectURL( blob );

		document.querySelector( '[main-js]' ).src = url;

	}

}

export default new Tanki;