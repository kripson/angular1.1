var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var path = require('path');




app.use(bodyParser.json());
app.use(express.static(path.join((__dirname,'../dist/firstTry'));





app.post("/api/auth",require('./login.js'));
require('./listen.js')(http);