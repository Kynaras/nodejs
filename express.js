var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({ extended: false});

//Default it looks in views folder
app.set('view engine', 'ejs');
// app.use('/assets', (req, res, next) => {
// 	console.log(req.url);
// 	next();
// });

// Used so that includes in html do not get prevented by the express router
app.use('/assets', express.static('assets'));

app.post('/contact', urlEncodedParser, (req, res) => {
	console.log (req.body);
})
app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html');
    // console.log(req);
});
app.get('/contact', (req, res) => {
    console.log(req);
	console.log(req.query);
    res.send('This is the contact page');
});

app.get('/profile/:id', (req, res) => {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'gaming', 'shading']};
    res.render('profile', {person: req.params.id, data: data});
    // res.send('You requested to see a profile with the id of ' + req.params.id);
});
app.listen(3000);