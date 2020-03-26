const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); //folder for images, css, js

const request = require('request');

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/results', function(req, res){
	var query = req.query.search;
	var url = 'https://openlibrary.org/api/books?&format=json&jscmd=data&bibkeys=ISBN:' + query;
	request(url, function(error, response, dataStream){
		if (!error && response.statusCode == 200){
			var data = JSON.parse(dataStream);
			
			res.render('results', {data: data['ISBN:' + query]});
		}
	});
});

app.listen(3000, function() {
    console.log("Running");
})