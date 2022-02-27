class Block {

	constructor () {

		this.view = new Promise( async ( resolve, src, html, body ) => {
			
			src = await this.view(); html = null;
			body = document.createElement( 'body' );

			if ( src.txt ) html = src.txt;
			if ( src.url ) html = await fetch( src.url ).then( r => r.text() );

			body.append( html
				? document.createRange().createContextualFragment( html )
				: new DocumentFragment()
			);

			return resolve( body );

		});

	}

	async view () {

		return { url: null, txt: null };

	}

	async init () {}

	async render () {

		document.body.replaceWith( await this.view );

	}

	async launch () {}

}

export default Block;