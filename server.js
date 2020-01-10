var http = require('http');

//Req object comes loaded with details of the request that has been made. Res object is used to send response to client
var server = http.createServer((req, res) => {
	console.log('request was made ' + req.url);
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	//End the response and send it back to browser
	res.end('Hey girl what is up!');
});

//127.0.0.1 is local server default IP
server.listen(3000, '127.0.0.1');
console.log('Port is awaiting ships in dock 3000');
//Headers are used to give meta info to the server of the content being sent. Eg: content type, status of the content "200" = everything is okay. '404' == error
