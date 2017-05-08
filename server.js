var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mewfymeanblog');

var PostSchema = mongoose.Schema({
	title: {type: String, required:true},
	body: String,
	tag: String,
	posted: Date
});

var PostModel = mongoose.model("PostModel", PostSchema);



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.post("/api/blogpost", createPost);

function createPost (req, res){
	var post = req.body;
	console.log(post);
	PostModel.create(post);
	res.json(post);
}

app.listen(3000);