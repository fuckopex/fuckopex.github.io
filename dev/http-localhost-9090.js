import * as Drash from "https://deno.land/x/drash@v2.6.0/mod.ts";
import { ETagService } from "https://deno.land/x/drash@v2.6.0/src/services/etag/etag.ts";


const etag = new ETagService();

class StaticResource extends Drash.Resource {

	paths = [ '/*' ];

	services = {

		GET: [ etag ],
		HEAD: [ etag ],

	};

	HEAD () {}

	GET ( request, response ) {

		let path = `../${ new URL( request.url ).pathname }${ request.url.slice( -1 ) == '/' ? 'index.html' : '' }`;

		path.match( /\.pack$/ )

		? response.send( 'application/octet-stream', Deno.readFileSync( path ) )
		: response.file( path );

		  response.headers.set( 'cache-control', 'no-cache, no-store, must-revalidate' );

	}

}


new Drash.Server( {

	protocol: 'http',
	hostname: 'localhost',
	port: 9090,

	resources: [
		StaticResource,
	],

}).run();