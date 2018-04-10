//Main entry point for server

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var app = express();

var router = require('./router');

//App setup
app.use(morgan('combined'));

//static files
app.use(express.static(path.join(__dirname,'/public')));

//routes
router(app);

//Server setup
var port = process.env.PORT || 3000;

var server = http.createServer(app);

server.listen(port,function(error){
	if(error) throw error;
	console.log("server listening on port "+port);
})