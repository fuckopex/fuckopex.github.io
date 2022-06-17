import * as fs from "https://deno.land/std@0.144.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.144.0/path/mod.ts";
import Datapack from './Datapack.js';


const config = {

	pack: 	'launcher',
	src: 	'http://localhost:9090/',
	target: 'https://fuckopex.github.io/',
	urls: 	[],

}

for await ( let entry of fs.walk( '../src/', { includeDirs: false } ) )

	config.urls.push( config.src + entry.path.split( path.sep ).join( path.posix.sep ).replace( '../', '' ) );
	config.urls.push( config.src );


await Datapack.use( config );