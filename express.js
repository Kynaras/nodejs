var express = require('express');
var app = express();

//Default it looks in views folder
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html');
    console.log(req);
});
app.get('/contact', (req, res) => {
    res.send('This is the contact page');
    console.log(req);
});

app.get('/profile/:id', (req, res) => {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'gaming', 'shading']};
    res.render('profile', {person: req.params.id, data: data});
    // res.send('You requested to see a profile with the id of ' + req.params.id);
})
app.listen(3000);