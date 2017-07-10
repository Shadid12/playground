const mongoose = require('mongoose');

mongoose.connect('mongodb://root:toor@ds149268.mlab.com:49268/shadid', (err, o) => {
	if(err){
		console.log("Unable to connect");
	}
	console.log(o);
});