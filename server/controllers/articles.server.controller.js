var mongoose = require('mongoose');
var Article = require('./../models/Article.js');
var Upload = require('./../models/Upload.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');
var async = require('async');

module.exports.list = function (req, res) {
  Article.find(function (err, data) {
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

module.exports.create = function (req, res) {
  var article = new Article(req.body);
  article.user = req.user;
  article.save(function (err, data) {
    if (err) {
      return res.status(400).send({

        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.upload = function (req, res) {
  Upload.remove({}, function (err) {
    console.log('collection removed')
  });
  var lines = req.body.csvFile.split("\n");

  var result = [];
  var color;

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {

    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      if (currentline[j] !== undefined && currentline[j] !== '') {
        var headerStr = headers[j].replace(/\s/g, '').replace(/\’/g, '').replace('\u0003', '').replace('-', '');
        if (currentline[j].indexOf('%') > -1) {
          obj[headerStr + 'type'] = '%';
        } else if (currentline[j].indexOf('$') > -1) {
          obj[headerStr + 'type'] = '$';
        } else {
          obj[headerStr + 'type'] = '*'
        }
        currentline[j] = currentline[j].replace('%', '').replace('$', '');

        if (currentline[j] == '*') {
          obj[headerStr] = -1;
        } else {
          obj[headerStr] = currentline[j];
        }
        if (j > 11 && j <= 21) {
          var colorScheme = assignColor(currentline[j]);
          obj[headerStr + 'color'] = colorScheme;
        }
      }
    }
    result.push(obj);
  }
  //return result; //JavaScript object
  var jsonArr = JSON.stringify(result); //JSON
  console.log('result', result);
  async.mapSeries(result, function (data, callback) {
    if (Object.keys(data).length > 0) {
      var csvUpload = new Upload(data);
      csvUpload.save(function (err, myResult) {
        // console.log('err',err);
        if (err) {
          return res.status(400).send({
            ok: false,
            message: errorHandler.getErrorMessage(err)
          });
        } else {
          callback(null);
        }
      });
    } else {
      return res.status(400).send({
        ok: false,
        message: errorHandler.getErrorMessage("values are not correct.")
      });
    }


  }, function (err, result) {
    //console.log('jsonArr', myjsonArr);
    res.status(200).json({
      ok: true,
      message: 'CSV file uploaded successfully.'
    });
  });

};

function assignColor(color) {
  var colorVal = parseInt(color);
  var c;
  if (colorVal <= 10 && colorVal >= 8) {
    c = '#B8E986'
  } else if (colorVal <= 7 && colorVal >= 4) {
    c = '#FFC926'
  } else if (colorVal <= 3 && colorVal >= 0) {
    c = '#F7764A'
  } else {
    c = '#D3D3D3'
  }
  return c;
}

module.exports.getCSV = function (req, res) {
  var sortKey = {}, selectKey = {}, mainSort = {};
  var keys = [];

  sortKey[req.params.key] = -1;

  var customHeader = [
    {
      "Continuingeducationandemploymentrate": "Continuing education and employment rate",
      "idx": 1,
      benchmark:[{points:"10",metrics:"80%",improvement:"5.0%" },{points:"9",metrics:"77.5%",improvement:"4.5%" },{points:"8",metrics:"75%",improvement:"4.0%" },{points:"7",metrics:"72.5%",improvement:"3.5%" },{points:"6",metrics:"70%",improvement:"3.0%" },{points:"5",metrics:"67.5%",improvement:"2.5%" },{points:"4",metrics:"65%",improvement:"2.0%" },{points:"3",metrics:"62.5%",improvement:"1.5%" },{points:"2",metrics:"60%",improvement:"1.0%" },{points:"1",metrics:"57.5%",improvement:"0.5%" }]
    }, {
      "Medianwagesofbachelorsgrads": "Median wages of bachelor’s grads ",
      "idx": 2,
      benchmark:[{points:"10",metrics:"$40,000",improvement:"5.0%" },{points:"9",metrics:"$37,500",improvement:"4.5%" },{points:"8",metrics:"35,000",improvement:"4.0%" },{points:"7",metrics:"$32,500",improvement:"3.5%" },{points:"6",metrics:"$30,000",improvement:"3.0%" },{points:"5",metrics:"$27,500",improvement:"2.5%" },{points:"4",metrics:"$25,000",improvement:"2.0%" },{points:"3",metrics:"$22,500",improvement:"$2.0" },{points:"2",metrics:"$20,000",improvement:"1.0%" },{points:"1",metrics:"$17,500",improvement:"0.5%" }]
    }, {
      "Averagecostperbachelorsdegree": "Average cost per bachelor’s degree",
      "idx": 3,
      benchmark:[{points:"10",metrics:"$21,589",improvement:"5.0%" },{points:"9",metrics:"$22,939",improvement:"4.5%" },{points:"8",metrics:"24,287",improvement:"4.0%" },{points:"7",metrics:"$25,637",improvement:"3.5%" },{points:"6",metrics:"$26,986",improvement:"3.0%" },{points:"5",metrics:"$28,336",improvement:"2.5%" },{points:"4",metrics:"$29,685",improvement:"2.0%" },{points:"3",metrics:"$31,034",improvement:"$2.0" },{points:"2",metrics:"$32,383",improvement:"1.0%" },{points:"1",metrics:"$33,733",improvement:"0.5%" }]
    }, {
      "Sixyeargraduationrate": "Six year graduation rate",
      "idx": 4,
      benchmark:[{points:"10",metrics:"70%",improvement:"5.0%" },{points:"9",metrics:"68.8%",improvement:"4.5%" },{points:"8",metrics:"67.5%",improvement:"4.0%" },{points:"7",metrics:"66.3%",improvement:"3.5%" },{points:"6",metrics:"65%",improvement:"3.0%" },{points:"5",metrics:"63.8%",improvement:"2.5%" },{points:"4",metrics:"62.5%",improvement:"2.0%" },{points:"3",metrics:"61.3%",improvement:"1.5%" },{points:"2",metrics:"60%",improvement:"1.0%" },{points:"1",metrics:"58.8%",improvement:"0.5%" }]
    }, {
      "Academicprogress2ndyearretention": "Academic progress 2nd year retention",
      "idx": 5,
      benchmark:[{points:"10",metrics:"90%",improvement:"5.0%" },{points:"9",metrics:"88.8%",improvement:"4.5%" },{points:"8",metrics:"87.5%",improvement:"4.0%" },{points:"7",metrics:"86.3%",improvement:"3.5%" },{points:"6",metrics:"85%",improvement:"3.0%" },{points:"5",metrics:"83.8%",improvement:"2.5%" },{points:"4",metrics:"82.5%",improvement:"2.0%" },{points:"3",metrics:"81.3%",improvement:"1.5%" },{points:"2",metrics:"80%",improvement:"1.0%" },{points:"1",metrics:"78.8%",improvement:"0.5%" }]
    }, {
      "BachelorsSTEMandstrategicemphasis": "Bachelor’s STEM and strategic emphasis",
      "idx": 6,
      benchmark:[{points:"10",metrics:"50%",improvement:"5.0%" },{points:"9",metrics:"47.5%",improvement:"4.5%" },{points:"8",metrics:"45%",improvement:"4.0%" },{points:"7",metrics:"42.5%",improvement:"3.5%" },{points:"6",metrics:"40%",improvement:"3.0%" },{points:"5",metrics:"37.5%",improvement:"2.5%" },{points:"4",metrics:"35%",improvement:"2.0%" },{points:"3",metrics:"32.5%",improvement:"1.5%" },{points:"2",metrics:"30%",improvement:"1.0%" },{points:"1",metrics:"27.5%",improvement:"0.5%" }]
    }, {
      "UndergraduateswithPellgrantpercent": "Undergraduates with Pell-grant percent",
      "idx": 7,
      benchmark:[{points:"10",metrics:"30%",improvement:"5.0%" },{points:"9",metrics:"28.8%",improvement:"4.5%" },{points:"8",metrics:"27.5%",improvement:"4.0%" },{points:"7",metrics:"26.3%",improvement:"3.5%" },{points:"6",metrics:"25%",improvement:"3.0%" },{points:"5",metrics:"23.8%",improvement:"2.5%" },{points:"4",metrics:"22.5%",improvement:"2.0%" },{points:"3",metrics:"21.3%",improvement:"1.5%" },{points:"2",metrics:"20%",improvement:"1.0%" },{points:"1",metrics:"18.8%",improvement:"0.5%" }]
    }, {
      "GraduateSTEMandstrategicemphasis": "Graduate STEM and strategic emphasis",
      "idx": 8,
      benchmark:[{points:"10",metrics:"60%",improvement:"5.0%" },{points:"9",metrics:"57.5%",improvement:"4.5%" },{points:"8",metrics:"55%",improvement:"4.0%" },{points:"7",metrics:"52.5%",improvement:"3.5%" },{points:"6",metrics:"50%",improvement:"3.0%" },{points:"5",metrics:"47.5%",improvement:"2.5%" },{points:"4",metrics:"45%",improvement:"2.0%" },{points:"3",metrics:"42.5%",improvement:"1.5%" },{points:"2",metrics:"40%",improvement:"1.0%" },{points:"1",metrics:"37.5%",improvement:"0.5%" }]
    }, {
      "Bachelorsdegreeswithoutaccesshours": "Bachelor’s degrees without access hours",
      "idx": 9,
      benchmark:[{points:"10",metrics:"80%",improvement:"5.0%" },{points:"9",metrics:"77.5%",improvement:"4.5%" },{points:"8",metrics:"75%",improvement:"4.0%" },{points:"7",metrics:"72.5%",improvement:"3.5%" },{points:"6",metrics:"70%",improvement:"3.0%" },{points:"5",metrics:"67.5%",improvement:"2.5%" },{points:"4",metrics:"65%",improvement:"2.0%" },{points:"3",metrics:"62.5%",improvement:"1.5%" },{points:"2",metrics:"60%",improvement:"1.0%" },{points:"1",metrics:"57.5%",improvement:"0.5%" }]
    },
  ];

  if (req.params.key == 'Left' || req.params.key == 'Right') {
    var vidx = parseInt(req.params.idx);
    var keyvalue = _.findWhere(customHeader, { "idx": vidx });
    keys = _.keys(keyvalue);
    req.params.key = keys[0];
  }

  var sortedHeader;// = customHeader[req.params.idx];
  var deletedHeader = [];
  if (req.params.idx) {

    for (var j = 0; j < customHeader.length; j++) {
      if (customHeader[j].idx != req.params.idx) {
        deletedHeader.push(customHeader[j]);
      } else {
        sortedHeader = customHeader[j];
      }
    }
  }

  for (var i = 0; i < deletedHeader.length; i++) {
    if (deletedHeader[i] !== undefined && deletedHeader[i] !== null) {
      mainSort[Object.keys(deletedHeader[i])[0]] = 1;
      mainSort[Object.keys(deletedHeader[i])[0] + 'type'] = 1;
      mainSort[Object.keys(deletedHeader[i])[0] + 'pointcolor'] = 1;
      mainSort[Object.keys(deletedHeader[i])[0] + 'point'] = 1;
    }
  }

  Upload.find().select(mainSort).sort(sortKey).exec(function (err, data) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {

      selectKey[req.params.key] = 1;
      if (req.params.key == "Averagecostperbachelorsdegree") {
        sortKey[req.params.key] = 1;
      }
      selectKey[req.params.key + 'type'] = 1;
      selectKey[req.params.key + 'point'] = 1;
      selectKey[req.params.key + 'pointcolor'] = 1;
      selectKey['Full_Name'] = 1;
      selectKey['S_Name'] = 1;
      selectKey['Logo_Url'] = 1;

      Upload.find().select(selectKey).sort(sortKey).exec(function (err, singleData) {
        var mainData = {};

        mainData.headers = deletedHeader;
        mainData.paramkey = sortedHeader;
        mainData.griddata = data
        mainData.single = singleData
        res.status(200).send(mainData);
      });
    }
  });
};

module.exports.swipegetCSV = function (req, res) {
  var sortKey = {}, selectKey = {}, mainSort = {};
  var keys = [];


  var customHeader = [
    {
      "Continuingeducationandemploymentrate": "Continuing education and employment rate",
      "idx": 1
    }, {
      "Medianwagesofbachelorsgrads": "Median wages of bachelor’s grads ",
      "idx": 2
    }, {
      "Averagecostperbachelorsdegree": "Average cost per bachelor’s degree",
      "idx": 3
    }, {
      "Sixyeargraduationrate": "Six year graduation rate",
      "idx": 4
    }, {
      "Academicprogress2ndyearretention": "Academic progress 2nd year retention",
      "idx": 5
    }, {
      "BachelorsSTEMandstrategicemphasis": "Bachelor’s STEM and strategic emphasis",
      "idx": 6
    }, {
      "UndergraduateswithPellgrantpercent": "Undergraduates with Pell-grant percent",
      "idx": 7
    }, {
      "GraduateSTEMandstrategicemphasis": "Graduate STEM and strategic emphasis",
      "idx": 8
    }, {
      "Bachelorsdegreeswithoutaccesshours": "Bachelor’s degrees without access hours",
      "idx": 9
    },
  ];
  var mainData = [];

  async.mapSeries(customHeader, function (data, callback) {
    var key = Object.keys(data)[0]
    selectKey = {};
   
    sortKey = {};
    if (data.idx == 3) {
      sortKey[key] = 1;
    }
    else {
      sortKey[key] = -1;
    }

    selectKey[key] = 1;
    selectKey[key + 'type'] = 1;
    selectKey[key + 'point'] = 1;
    selectKey[key + 'pointcolor'] = 1;
    selectKey['Full_Name'] = 1;
    selectKey['S_Name'] = 1;
    selectKey['Logo_Url'] = 1;
    console.log('sortKey', sortKey);
    Upload.find().select(selectKey).sort(sortKey).exec(function (err, singleData) {
      var adata = data[Object.keys(data)[0]];     
      var head = { "head": adata };
      singleData.push(head);
      mainData.push(singleData);
      callback(null);

    });
  }, function (err, result) {

    res.status(200).send(mainData);

  });
}









module.exports.read = function (req, res) {
  res.json(req.article);
};


exports.delete = function (req, res) {
  var article = req.article;
  article.remove(function (err) {
    if (err) {
      return res.status(400).send();
    } else {
      res.json(article);
    }
  });
};


module.exports.update = function (req, res) {
  var article = req.article;

  article = _.extend(article, req.body);

  article.save(function (err) {
    if (err) {
      return res.status(400).send();
    } else {
      res.json(article);
    }
  });
};

exports.articleByID = function (req, res, next, id) {
  Article.findById(id).populate('user', 'email').exec(function (err, article) {
    if (err) return next(err);
    if (!article) return next(new Error('Failed to load article ' + id));
    req.article = article;
    next();
  });
  function getObjectKeyIndex(obj, keyToFind) {
    var i = 0, key;

    for (key in obj) {
      if (key == keyToFind) {
        return i;
      }

      i++;
    }

    return null;
  }
};
