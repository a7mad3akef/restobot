'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/',function(req, res){
	res.send('Hello!')
})