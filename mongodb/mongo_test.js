const client = require('mongodb').MongoClient;

client.connect('mongodb://root:toor@ds149268.mlab.com:49268/shadid', (err, db) => {
	if(err){
		return console.log("Not working");
	}
	console.log("Working man");

	db.collection('Todos').insertOne({
		text: 'Some text',
		completed: false
	}, (err, result) => {
		if(err){
			console.log("You are messed bud")
		}
		console.log("Data inserted mate");
	})

	db.close();
});