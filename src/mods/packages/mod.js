import Mods from '/src/Mods.js';

class Mod {

	name = 'Packages';
	type = 'U';
	title = 'Танковые классы';
	desc = 'Доступ к классам танков через cjs.exports';

	init () {

		const defineProperty_N = Object.defineProperty;

		Object.defineProperty = function( obj, prop, desc ) {

			desc.configurable = desc.configurable ?? true;

			return defineProperty_N( obj, prop, desc );

		}

	}

	classes = {};
	handlers = [];

	use ( handler ) {

		if ( handler ) this.handlers.push( handler );

		Mods.Tanki.replace( 'i.exports}', 'Mods.Packages.parse( i.exports ), i.exports }' );

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

	gets = {};

	get ( n ) {

		if ( this.gets[ n ] !== undefined )

			return this.classes[ this.gets[ n ] ];

		else

			return this.classes[  this.gets[ n ] = Object.keys( this.classes ).filter( cn => cn.match( n ) )?.[0] ?? null ];

	}

	list ( n ) {

		console.log( Object.keys( this.classes ).filter( cn => cn.match( n ) ).join( '\n' ) );

	}

	prop ( object, property, length ) {

		const properties = Array.prototype.concat(
			Object.getOwnPropertyNames( object ),
			Object.getOwnPropertyNames( object.constructor.prototype )
		);

		for ( let prop of properties )
			if ( prop.match( property ) && object[ prop ].length == length )
				return prop;

		return null;
		
	}

}

export default new Mod;