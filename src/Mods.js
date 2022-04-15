class Mods {

	async init ( urls ) {

		urls = [

			'/src/mods/01_Test/mod.js',
			'/src/mods/02_JSasMod/mod.js',
			'/src/mods/03_Tanki/mod.js',
			'/src/mods/04_BeautyMJS/mod.js',
			'/src/mods/05_DebugMJS/mod.js',
			'/src/mods/06_Packages/mod.js',
			'/src/mods/07_ResReplace/mod.js',

			'/src/mods/09_UI+/mod.js',
			'/src/mods/10_GarageOff/mod.js',
			'/src/mods/11_Vision+/mod.js',/**/
			
		];

		for ( let url of urls )

			await this.load( url );

	}

	async load ( url, js, blob, mod ) {

		js = await fetch( url ).then( r => r.text() );
		js = `import Mods from '${ window.location.origin }/src/Mods.js';\n` + js;

		blob = new Blob( [ js ], { type: 'application/javascript' } );
		mod = await import( URL.createObjectURL( blob ) ).then( m => m.default );

		mod.pwd = window.location.origin + url.replace( '/' + url.split( '/' ).pop(), '' );
		await mod.init?.();
		this[ mod.name ] = mod;

		return mod.name;

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
T 	Vision+  			Более контрастные вещи на поле боя
T 	VisibleCollisions 	3д модельки как в коллизии карты, объединенные коллизии пропов
T 	Control+ 			Улучшенное управление с мыши и камеры
T 	TinselOff 			Отключение красок и скинов
T?	TextureScale 		Уменьшение текстур в N раз для снижение потребления памяти

C 	Vision++ 			Максимальная читерная контрастность
C 	WhiteTextures		Белые текстуры карт + продырявленные домики
C 	Weapon++ 			Большие башни, углы изиды, сосулька, гаусс/сракер
C 	Physic++ 			Спидхак, игнор физ. воздействий, полеты, антипереворот


	1. интерфейс
		+ отключение подсказок
		+ отключить анонсментхомскрин
		+ отключены высеры о получении награды за квест
		+ старые индикаторы урона
		+ убрать кнопки в битве справа вверху
		+ убрана анимация на кнопке в главном меню
		+ отключить нахер желтые кружочки в лобби
		+ добавила мяч наша команда
		+ в этой битве не начисляется фонд (модальное окно убрать)
	2. гараж
		+ отключен весь гараж
	3. улучшения видимости
		+ одинаковые параметры освещения
		+ увеличить яркость/контрастность дропа, мин, флагов, мяча
		+ маркеры видны на любом расстоянии
		+ радар больше в 2 раза
		+ отключить белую подсветку бессмертия
	4. измененные физ модельки
		- модели местности/зданий заменены на соответствующие физ. модели
		- коллизии в файлах карт объеденены чтоб не спотыкаться
	5. изменения управления
		- колесико мыши более интенсивное для вращения камеры
		- дальность камеры от танка сделать чуть дальше
		- чат показывается более долго и его больше (Как на флеше)

	6 (чит). видимость
		- раскрашены танки в цвета команд
		- постоянная обводка танков
		- ники игроков поверх текстур
		- ники врагов не скрываются
		- убраны кусты
		- мины дальность отрисовки
	7 (чит). белые текстуры
		- белые текстуры
		- продырявлены здания
	8 (чит). вооружение
		- коллизия всех башен одинакова и чуть больше нормы
		- увеличенные углы у изиды
		- сосулька крусейдера только по врагам попадет
		- гаусс и крусейдер долго целят
	9 (чит). физика
		- майджик на физику боди. черепашка, флеппи, спидхак

*/