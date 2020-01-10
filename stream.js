var http = require('http');

var fs = require('fs');

//createReadStream has event.emitter inheritted. Emits whenever a chunk of data is received.
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', (chunk) => {
	console.log('new chunk received:');
	myWriteStream.write(chunk, (err)=>{console.log(err)});
})