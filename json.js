var http = require('http');
	var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');


var server = http.createServer((req, res) => {
	if(req.url == "/hey/hellop")
	{
	console.log('request was made ' + req.url);

	res.writeHead(200, {'Content-Type' : 'application/json'})
    var myObj = { name: 'Kyle', job: 'unemployed', age: 27};
    res.end(JSON.stringify(myObj));
	}
});
	server.listen(3000, '127.0.0.1');
console.log('Port is awaiting ships in dock 3000');
