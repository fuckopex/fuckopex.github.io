import Tanki from '/src/Tanki.js';

class Packages {

	type = "U";
	name = "Танковые классы";
	desc = "Доступ к классам танков через cjs.exports";

	classes = {};
	handlers = [];

	use ( handler ) {

		if ( handler ) this.handlers.push( handler );

		Tanki.mainJS = 
		Tanki.mainJS.replace( 'i.exports}', 'Mods.Packages.parse( i.exports ), i.exports }' );

	}
	
	parse ( exp, pkg = '', i = 0 ) {

		if ( exp.constructor !== Object ) return;

		for ( let k of Object.keys( exp ).filter( k => k != '$$importsForInline$$' ) ) {

			if ( exp[ k ] == exp || exp[ k ] == null ) continue;

			if ( exp[ k ].constructor == Object )

				this.parse( exp[ k ], `${ pkg }.${ k }`, i + 1 );

			else if ( exp[ k ].$metadata$ )
					
				this.handle( `${ pkg }.${ k }`, exp[ k ] );

		}

	}

	handle ( n, f ) {

		this.classes[ n ] = f;

		for ( let handler of this.handlers ) handler( n, f );

	}

	get ( n ) {

		return this.classes[ n ];

	}

	list () {

		return Object.keys( this.classes ).join('\n');

	}

}

export default window.PPP = new Packages;