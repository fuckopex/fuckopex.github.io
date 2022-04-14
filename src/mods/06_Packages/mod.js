import Mods from '/src/Mods.js';

class Mod {

	name = 'Packages';
	type = 'U';
	title = 'Танковые классы';
	desc = 'Доступ к классам танков через cjs.exports';


	init () {

		const defineProperty = Object.defineProperty;

		Object.defineProperty = function( obj, prop, desc ) {

			desc.configurable = desc.configurable ?? true;

			return defineProperty( obj, prop, desc );

		}

	}

	used = false;
	hooks = [];

	use ( ...hooks ) {

		if ( ! this.used++ ) {
			
			Mods.Tanki.replace( /i\.exports}/, `Mods.${ this.name }.parse( i.exports ),i.exports}` );

		}

		this.hooks = this.hooks.concat( hooks );

	}

	parse ( descriptor, fullname, descriptors, desc ) {

		if ( descriptor.constructor !== Object ) return;

		descriptors = Object.getOwnPropertyDescriptors( descriptor );

		for ( let name in descriptors ) {

			desc = descriptors[ name ];
			name = ( fullname ? fullname + '.' : '' ) + name;

			if ( desc.value == descriptor || name.match( /\$\$importsForInline\$\$/ ) ) continue;

			if ( desc.value?.constructor == Object )

				this.parse( desc.value, name );

			else

				this.hook( name, desc );

		}

	}

	packages = {};

	hook ( fullname, descriptor ) {

		Object.defineProperty( this.packages, fullname, descriptor );

		for ( let hook of this.hooks )
			if ( fullname.match( hook[0] ) )

				if ( Object.hasOwn( descriptor, 'value' ) )
					hook[1]( descriptor.value );
				else
					hook[1]( descriptor.get() );

	}

	gets = {};

	get ( n ) {

		if ( this.gets[ n ] === undefined )

			this.gets[ n ] = Object.getOwnPropertyNames( this.packages ).filter( fn => fn.match( n ) )?.[0] ?? 'Not Matched';

		return this.packages[ this.gets[ n ] ];

	}

	list ( n ) {

		console.log(
			Object.getOwnPropertyNames( this.packages ).filter( fn => fn.match( n ) ).join( '\n' )
		);

	}

	prop ( object, property, length ) {

		const properties = Array.prototype.concat(
			Object.getOwnPropertyNames( object ),
			Object.getOwnPropertyNames( object.constructor.prototype )
		);

		for ( let prop of properties )
		if ( prop.match( property ) ) {

			if ( typeof object[ prop ] == 'function' ) {

				if ( object[ prop ].length == length ) return prop;
			
			}

			else return prop;

		}

		return null;
		
	}

}

export default new Mod;