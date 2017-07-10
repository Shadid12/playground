const express = require('express');
const hbs 	  = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', { title: 'This is a our page title' } );
});

app.get('/bad', (req, res) => {
	res.send({ err: "This is a Error Message" });
});

app.listen(8080);