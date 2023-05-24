const{ Console } = require('console');
var express = require('express');
var path = require('path');
var session = require('express-session');
//var MongoClient = require('mongodb').MongoClient;
var alert = require('alert');
const { Template } = require('ejs');

var app = express();
app.get('/',function(req,res){
  if(req.session.user) delete req.session.user; // when returning to the login page we cannot comeback
  res.render('login');
});