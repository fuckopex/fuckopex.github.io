import Datapack from './Datapack.js';


const config = {

	pack: 	'tanki',
	src: 	'https://tankionline.com/play/',
	target: 'https://tankionline.com/play/',
	urls: 	[],

}


let index = await fetch( config.src ).then( r => r.text() );

let js = config.src + 'static/js/' + index.match( /main\.[0-9a-f]{8}\.js/ );
let css = config.src + 'static/css/' + index.match( /main\.[0-9a-f]{8}\.css/ );

	config.urls.push( config.src );
	config.urls.push( css );
	config.urls.push( js );


js = await fetch( js ).then( r => r.text() );

for ( let m of Array.from( js.matchAll( /"(static\/.+?)"/g ) ) )
	
	config.urls.push( config.src + m[ 1 ] );


await Datapack.use( config );