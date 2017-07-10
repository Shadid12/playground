const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send("Hello worlds");
});

app.get('/bad', (req, res) => {
	res.send({ err: "This is a Error Message" });
});

app.listen(8080);