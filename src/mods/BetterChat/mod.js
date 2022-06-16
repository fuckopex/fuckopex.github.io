class Mod {

	name = 'BetterChat';
	type = 'TANKI';
	title = 'BetterChat';
	desc = `Время видимости чата в бою 10 секунд
Количество строк чата в бою увеличино до 14`;


	use () {

		const MAX_LINES_OLD = 8;
		const MAX_LINES_NEW = 14;
		const TIMEOUT = 10e3;

		Mods.Packages.use(

			[ 'BattleChatComponent:', f => {

				f.Companion.CHAT_HEIGHT_0 = Math.floor( MAX_LINES_NEW / MAX_LINES_OLD * f.Companion.CHAT_HEIGHT_0 );
				f.Companion.HIDE_CHAT_TIMEOUT_0.low_ = TIMEOUT;

			}],

		);


		Mods.Tanki.replace( new RegExp(
			`this.atlases_0\\[0\\].texture,(.{4}),${ MAX_LINES_OLD }` ),
			`this.atlases_0[0].texture,$1,${ MAX_LINES_NEW }`
		);
		Mods.Tanki.replace( new RegExp(
			`this.iconsAtlas.texture,(.{4}),${ MAX_LINES_OLD }` ),
			`this.iconsAtlas.texture,$1,${ MAX_LINES_NEW }`
		);
		Mods.Tanki.replace(
			`${ MAX_LINES_OLD }===this.firstLine_0&&(this.firstLine_0=this.firstLine_0-${ MAX_LINES_OLD }|0)`,
			`${ MAX_LINES_NEW }===this.firstLine_0&&(this.firstLine_0=this.firstLine_0-${ MAX_LINES_NEW }|0)`
		);
		Mods.Tanki.replace( new RegExp(
			`t.texture,(.{4}),${ MAX_LINES_OLD }` ),
			`t.texture,$1,${ MAX_LINES_NEW }`
		);
		Mods.Tanki.replace(
			`this.linesCount_0>=${ MAX_LINES_OLD }`,
			`this.linesCount_0>=${ MAX_LINES_NEW }`
		);
		Mods.Tanki.replace( new RegExp(
			`.maxLines,${ MAX_LINES_OLD }`, 'g' ),
			`.maxLines,${ MAX_LINES_NEW }`
		);

	}

	launch () {

		this.use();

		Mods.Tanki.use();

	};

}