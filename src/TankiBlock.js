import Block from '/src/Block.js';

class TankiBlock extends Block {

	async view () {

		return { url: '/src/Tanki/view.html' };

	}

	mainJS = null;

	async init ( index, cssUrl, jsUrl ) {

		const VIEW 			= await this.view;
		const TANKI_URL 	= 'https://tankionline.com/play/';
		const CSS_REGEXP 	= /static\/css\/main\.[0-9a-f]{8}\.css/;
		const JS_REGEXP 	= /static\/js\/main\.[0-9a-f]{8}\.js/;


		index = await fetch( TANKI_URL ).then( r => r.text() );
		cssUrl = `${ TANKI_URL }${ index.match( CSS_REGEXP ) }`;
		jsUrl = `${ TANKI_URL }${ index.match( JS_REGEXP ) }`;


		VIEW.querySelector( 'link' ).href = cssUrl;

		this.mainJS = ( await fetch( jsUrl ).then( r => r.text() ) )
		.replace( `^https://(.*\\\\.)?tankionline.com/`, `^https?://(fuckopex|localhost)` )
		.replace( `/play/`, `https://tankionline.com/play/` )
		.replace( `if(!("zh"`, `return; if(!("zh"` );

		window.fbq = () => null;
		window.gtag = () => null;

	}

	async launch ( script, blob, url ) {

		const VIEW = await this.view;

		script = VIEW.querySelector( 'script[type="module"]' );
		blob = new Blob( [ this.mainJS ], { type: "application/javascript" } );
		url = URL.createObjectURL( blob );

		script.src = url;
		
	}

}

export default new TankiBlock();