import Block 		from '/src/Block.js';
import MainBlock 	from '/src/MainBlock.js';

class LaunchBlock extends Block {

	async init ( favicon, style ) {
		
		document.title = 'FUCKOPEX';

		favicon = document.createElement( 'link' );
		favicon.href = '/src/Launch/favicon.ico';
		favicon.rel = 'icon';

		style = document.createElement( 'link' );
		style.href = '/src/Launch/style.css';
		style.rel = 'stylesheet';

		document.head.append( favicon, style );

	}

	async launch () {

		await MainBlock.init();
		await MainBlock.render();

	}

}

export default new LaunchBlock();