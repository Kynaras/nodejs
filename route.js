var http = require('http');
var fs = require('fs');


var server = http.createServer((req, res) => {
	if(req.url === "/home" || req.url === "/")
	{
	res.writeHead(200, {'Content-Type' : 'text/html'})
	fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	else
	{
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end("Error 404. Bzzzzt.");
	}
});
	server.listen(3000, '127.0.0.1');
console.log('Port is awaiting ships in dock 3000');
