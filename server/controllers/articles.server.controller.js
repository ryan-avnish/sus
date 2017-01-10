var mongoose = require('mongoose');
var Article = require('./../models/Article.js');
var Upload = require('./../models/Upload.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');
var async = require('async');

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
  var color;

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

    var obj = {};
    var currentline=lines[i].split(",");
    for(var j=0;j<headers.length;j++){
      if(currentline[j] !== undefined && currentline[j] !== '') {
        var headerStr = headers[j].replace(/\s/g, '').replace(/\’/g, '').replace('\u0003','').replace('-', '');
        currentline[j] = currentline[j].replace('%', '').replace('$', '');
        
          if(currentline[j] == '*') {
            obj[headerStr] = 11;
          }else {
            obj[headerStr] = currentline[j];    
          }
        if(j>11 && j<=21){
          var colorScheme = assignColor(currentline[j]);
          obj[headerStr+'color']= colorScheme;
        }
      }
    }
    result.push(obj);
  }
  //return result; //JavaScript object
  var jsonArr = JSON.stringify(result); //JSON
  
  async.mapSeries(result, function(data, callback) {
    if(Object.keys(data).length > 0) {
      var csvUpload = new Upload(data);
      csvUpload.save(function(err, myResult) {
        if (err) {
          return res.status(400).send({
              message: errorHandler.getErrorMessage(err)
            });
        } 
      });
    }
    
    callback(null);
  }, function(err, result) {
    //console.log('jsonArr', myjsonArr);
    res.status(200).json({
      message: 'CSV file uploaded successfully.'
    });
  });
  
};

function assignColor(color) {
  var colorVal = parseInt(color);
  var c;
  if(colorVal <= 10 && colorVal >= 8) {
     c = '#B8E986'
  }else if(colorVal <= 7 && colorVal >= 4) {
    c =  '#FFC926'
  }else if(colorVal <= 3 && colorVal >= 0) {
     c = '#F7764A'
  }else {
     c = '*'
  }
  return c;
}

module.exports.getCSV = function(req, res) {
  Upload.find(function(err, data) {
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
