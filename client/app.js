var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect('mongodb://localhost/blogPost');
app.set("view engiene", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
//title 
//image
//body
//crud operation 