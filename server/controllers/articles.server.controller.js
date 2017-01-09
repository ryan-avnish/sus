var mongoose = require('mongoose');
var Article = require('./../models/Article.js');
var errorHandler = require('./errors.server.controller');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Article.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var article = new Article(req.body);
  article.user = req.user;
  article.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.upload = function(req, res) {
  //var string = req.body.toString();
  //console.log('req.body', req.body);
  var string = JSON.stringify(req.body);
  var baseString = (new Buffer(string));
  var uploadedpath = path.join(__dirname, '../../app') + "/file/";
  var returnpath = "/file/";
  var passcode = Math.floor(100000 + Math.random() * 900000)
      passcode = passcode.toString().substring(0, 4);
      passcode = parseInt(passcode);
  var filename = passcode+".csv";

  if (!fs.existsSync(uploadedpath)) {
    fs.mkdirSync(uploadedpath);
  }
  var response = decodeBase64CSV(baseString, function (callback, uploadFile) {
      fs.writeFile(uploadedpath + filename, uploadFile, "base64", function (err) {
          if (err)
            return console.log(err);
            var Image_Path = req.protocol + '://' + req.host + returnpath + filename;

          // if (err) {
          //     callback1(true, err);
          // } else {
          //     callback1(false, Image_Path);
          // }
      });
  })
  function decodeBase64CSV(data, callback) {
    console.log('data', data);
    var dataString = 'data:application/csv;base64,' + data;
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
       response = {};
    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }
    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
      callback(null, response);
  }
  res.status(200).json(req.body);
}

module.exports.read = function(req, res) {
  res.json(req.article);
};


exports.delete = function(req, res) {
	var article = req.article;
	article.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(article);
		}
	});
};


module.exports.update = function(req, res) {
  var article = req.article;

  	article = _.extend(article, req.body);

  	article.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(article);
  		}
  	});
};

exports.articleByID = function(req, res, next, id) {
	Article.findById(id).populate('user', 'email').exec(function(err, article) {
		if (err) return next(err);
		if (!article) return next(new Error('Failed to load article ' + id));
		req.article = article;
		next();
	});
};
