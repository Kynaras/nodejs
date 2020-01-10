var fs = require('fs');

fs.unlink('WriteMe.js', (err) => {});

fs.mkdir('./jsStuff', (error) => {

	fs.readFile('readMe.txt', 'utf8', (err, data) =>
	{
		fs.writeFile('./jsStuff/newReadMe.txt', data, () => {});
	});
});

fs.unlink('jsStuff/newReadMe.txt', (err) => {});
fs.rmdir('./jsStuff', (err) => { console.log(err)});