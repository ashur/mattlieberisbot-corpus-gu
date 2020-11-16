const data = require( "./data" );
const fs = require( "fs" );

let value = data.unused[0];
if( !value )
{
	console.log( "Error: Values are exhausted" );
	process.exit( 1 );
}

data.used.push( value );
data.unused.shift();

fs.writeFile( "./data.json", JSON.stringify( data, null, 4 ), err =>
{
	if( err )
	{
		console.error( err.message, err.stack );
		process.exit( 1 );
	}
});

let tweet = `Matt Lieber is ${value}.`;
console.log( tweet );
