import Block from '/src/Block.js';

class ModBlock extends Block {

	async view () {
		
		return { txt: '<script type="module"></script>' };

	}
	
	mod = null;

	async init ( mod ) {

		this.mod = mod;

	}

	async launch ( script ) {

		const VIEW = await this.view;

		script = VIEW.querySelector( 'script' );
		script.src = this.mod.path + 'index.js';

	}

}

export default new ModBlock();