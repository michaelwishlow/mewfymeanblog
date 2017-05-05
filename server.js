var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


app.post("/api/blogpost", createPost);

function createPost (req, res){
	var post = req.body;
	console.log(post);
}

app.listen(3000);