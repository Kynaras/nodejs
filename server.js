var http = require('http');
	var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

//Req object comes loaded with details of the request that has been made. Res object is used to send response to client
var server = http.createServer((req, res) => {
	console.log('request was made ' + req.url);
	res.writeHead(200, {'Content-Type' : 'text/html'});
	//End the response and send it back to browser


//createReadStream has event.emitter inheritted. Emits whenever a chunk of data is received.

//piping
myReadStream.pipe(res);

});

//127.0.0.1 is local server default IP
server.listen(3000, '127.0.0.1');
console.log('Port is awaiting ships in dock 3000');
//Headers are used to give meta info to the server of the content being sent. Eg: content type, status of the content "200" = everything is okay. '404' == error
