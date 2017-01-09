var mongoose = require('mongoose');
var Article = require('./../models/Article.js');
var Upload = require('./../models/Upload.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');
//var async = require('async');

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
 
  var lines=req.body.csvFile.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

    var obj = {};
    var currentline=lines[i].split(",");
    //console.log('currentline---->',currentline);
    console.log('currentline[12]', currentline[12]);

    
    console.log('colorScheme', colorScheme);
    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
      if(j>11 && j<=21){
        console.log('in');

        var colorScheme = assignColor(currentline[j], j);
        obj= colorScheme;
      }
    }

console.log(obj);
    result.push(obj);

  }
  //return result; //JavaScript object
 // console.log('result', result)
  var jsonArr = JSON.stringify(result); //JSON
  
  res.status(200).json(req.body);
};

function assignColor(color, key) {
  var colorVal = parseInt(color);
  var c = {};
  if(colorVal <= 10 && colorVal >= 8) {
     c[key+ "_color"]= '#B8E986'
  }else if(colorVal <= 7 && colorVal >= 4) {
      c[key+ "_color"]=  '#FFC926'
  }else if(colorVal <= 3 && colorVal >= 0) {
     c[key+ "_color"] = '#F7764A'
  }else {
     c[key+ "_color"] = '*'
  }
return c;
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
