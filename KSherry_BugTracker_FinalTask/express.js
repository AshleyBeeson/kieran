//imports for setting up express
var express = require("express");
var app = express();

//imports for accessing the database and for using the api 
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const routes = require('./routes/api');

//Connect to the Database and set up mongoose 
//bugDB is the mongo database
var mongoDB = 'mongodb://127.0.0.1:27017/bugDB';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

//setting statics from public folder
//images and unchanging information
app.use(express.static('public'));

//set up use of body parser to read the json from the api
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//seting the use of the api in the routes directory
app.use('/api', routes);

//server error handling
app.use(function(err, req, res, next){
	res.status(422).send({error: err.message});
})

//Pathing for the main page set to index.html that calls the script from index.js 
app.get ('/*', function(req,res){
	res.sendFile(__dirname + "/public/index.html");
})

//initialise the server on port 15000
var server = app.listen(15000,function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("server running on 15000");
})