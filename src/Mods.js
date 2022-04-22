class Mods {

	async init ( dir, name, urls ) {

		dir = '/src/mods/';
		name = '/mod.js';

		urls = [

			dir + '01_Test' 				+ name,
			dir + '02_JSasMod' 				+ name,
			dir + '03_Tanki' 				+ name,
			dir + '04_BeautyMJS' 			+ name,
			dir + '05_DebugMJS' 			+ name,
			dir + '06_Packages' 			+ name,
			dir + '07_ResReplace' 			+ name,
			dir + '08_PkgViewer' 			+ name,
			dir + '09_GarageOff' 			+ name,
			dir + '10_BetterUI' 			+ name,
			dir + '11_BetterChat' 			+ name,
			dir + '12_BetterVisibility' 	+ name,
			dir + '13_TinselOff' 			+ name,
		//	dir + '14_BetterCollisions' 	+ name,
			dir + '15_CheatVisibility' 		+ name,
		//	dir + '16_WhiteTextures' 		+ name,
			dir + '17_CheatWeapon' 			+ name,
		//	dir + '18_CheatPhysic' 			+ name,
			
		];

		for ( let url of urls ) await this.load( url );

	}

	async load ( url, imp, txt, exp, js, blob, mod ) {

		imp = `import Mods from '${ window.location.origin }/src/Mods.js';`;
		txt = await fetch( url ).then( r => r.text() );
		exp = `export default new Mod;`;

		js = `${ imp }\n${ txt }\n${ exp }`;

		blob = new Blob( [ js ], { type: 'application/javascript' } );
		mod = await import( URL.createObjectURL( blob ) ).then( m => m.default );

		mod.pwd = window.location.origin + url.replace( '/' + url.split( '/' ).pop(), '' );
		await mod.init?.();
		this[ mod.name ] = mod;

		return mod;

	}

}

export default window._Mods = new Mods;

/*

модики
	D - debug
	U - util
	T - tanki
	C - cheat

D 	Test 				Главный тестовый мод
U	JSasMod 			Запуск любого js-файла в качестве мода
T 	Tanki 		 		Скачивает и подготавливет main.js/css + запускает чистый клиент
U	BeautyMJS 			Скачивание main.js в читабельном формате
D	DebugMJS 			Отладочный запуск танкового main.js из файла
U	Packages 			Доступ к пакетам main.js с возможностью ставить хуки
U	ResReplace 			Подмена ресурсов на основе замен ссылок
U 	PkgViewer 			Удобный просмотрщик всех пакетов main.js с фильтром на регулярках

T 	UI+ 				Улучшения в интерфейсе
T 	GarageOff 			Отключение гаража в лобби
T 	Battle+  			Более контрастные вещи на поле боя
T 	Collisions+		 	3д модельки как в коллизии карты, объединенные коллизии пропов
T 	TinselOff 			Отключение красок и скинов
T?	TextureScale 		Уменьшение текстур в N раз для снижение потребления памяти

C 	Vision++ 			Максимальная читерная контрастность
C 	WhiteTextures		Белые текстуры карт + продырявленные домики
C 	Weapon++ 			Большие башни, углы изиды, сосулька, гаусс/сракер
C 	Physic++ 			Спидхак, игнор физ. воздействий, полеты, антипереворот


	1. интерфейс
		+ отключение подсказок на экране загрузки
		+ смена фона экрана загрузки, убрано лого
		+ отключить анонсментхомскрин
		+ отключить нахер желтые кружочки в лобби
		+ убрана анимация на кнопке в главном меню
		+ отключены высеры о получении награды за квест
		+ в этой битве не начисляется фонд (модальное окно убрать)
		+ убрать кнопки в битве справа вверху
		+ доставила мяч наша команда
	2. гараж
		+ отключен весь гараж
	3. улучшения видимости
		+ увеличить яркость/контрастность дропа, мин, флагов, мяча
		+ одинаковые параметры освещения
		+ маркеры видны на любом расстоянии
		+ радар больше в 2 раза
		+ отключить белую подсветку бессмертия
		+ старые индикаторы урона
		+ колесико мыши более интенсивное для вращения камеры
		+ дальность камеры от танка сделать чуть дальше
		+ отключить хайлайты
	4. измененные физ модельки
		- модели местности/зданий заменены на соответствующие физ. модели
		- коллизии в файлах карт объеденены чтоб не спотыкаться

	6 (чит). видимость
		+ убраны кусты
		+ мины дальность отрисовки
		+ ники врагов не скрываются
		+ ники игроков поверх текстур
		+ постоянная обводка танков
		+ раскрашены танки в цвета команд
		- подсветка дропа
	7 (чит). белые текстуры
		- белые текстуры
		- продырявлены здания
	8 (чит). вооружение
		- гаусс и крусейдер долго целят
		- увеличенные углы у изиды
		- коллизия всех башен одинакова и чуть больше нормы
		- сосулька крусейдера только по врагам попадет
	9 (чит). физика
		- майджик на физику боди. черепашка, флеппи, спидхак

*/