// require node packages: 
var express = require("express");
var mongoose = require("mongoose");
var path = require('path');

// require mongoose models
var db = require("./models");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views/'));
 
app.get('/', function (req, res) {
    res.render('index');
});