'use strict';
require("babel-core/register");
var config = require('./config/config.js');
var mongoose = require ('mongoose');
var express = require ('express');

var uri = process.env.MONGOLAB_URI || config.db.uri;
var db = mongoose.connect(uri,function(){
	require('./seeds.js');
});

require('./models/Article.js');
require('./models/User.js');
require('./models/Upload.js');
var app = require('./express.js')(db);

// Bootstrap passport config
require('./passport')();

app.listen(app.get('port'), function(){
})

module.exports = app;
