var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UploadSchema = {

  Full_Name: {
    type: String,
    default: '',
    trim: true,
  },

  S_Name: {
    type: String,
    default: '',
    trim: true,
  },

  Logo_Url: {
    type: String,
    default: '',
  },

  Continuingeducationandemploymentrate: {
    type: Number,
    default: '',
  },

  Medianwagesofbachelorsgrads: {
    type: Number,
    default: '',
  },

  Averagecostperbachelorsdegree: {
    type: Number,
    default: '',
  },

  Sixyeargraduationrate: {
    type: Number,
    default: '',
  },

  Academicprogress2ndyearretention: {
    type: Number,
    default: '',
  },

  BachelorsSTEMandstrategicemphasis: {
    type: Number,
    default: '',
  },

  UndergraduateswithPellgrantpercent: {
    type: Number,
    default: '',
  },

  GraduateSTEMandstrategicemphasis: {
    type: Number,
    default: '',
  },

  Bachelorsdegreeswithoutaccesshours: {
    type: Number,
    default: '',
  },

  Continuingeducationandemploymentratepoint: {
    type: Number,
    default: '',
  },

  Medianwagesofbachelorsgradspoint: {
    type: Number,
    default: '',
  },

  Averagecostperbachelorsdegreepoint: {
    type: Number,
    default: '',
  },

  Sixyeargraduationratepoint: {
    type: Number,
    default: '',
  },

  Academicprogress2ndyearretentionpoint: {
    type: Number,
    default: '',
  },

  BachelorsSTEMandstrategicemphasispoint: {
    type: Number,
    default: '',
  },

  UndergraduateswithPellgrantpercentpoint: {
    type: Number,
    default: '',
  },

  GraduateSTEMandstrategicemphasispoint: {
    type: Number,
    default: '',
  },

  Bachelorsdegreeswithoutaccesshourspoint: {
    type: Number,
    default: '',
  },

  Continuingeducationandemploymentratepointcolor: {
    type: String
  },
  
  Medianwagesofbachelorsgradspointcolor: {
    type: String
  },

  Averagecostperbachelorsdegreepointcolor: {
    type: String
  },

  Sixyeargraduationratepointcolor: {
    type: String
  },

  Academicprogress2ndyearretentionpointcolor: {
    type: String
  },

  BachelorsSTEMandstrategicemphasispointcolor: {
    type: String
  },

  UndergraduateswithPellgrantpercentpointcolor: {
    type: String
  },

  GraduateSTEMandstrategicemphasispointcolor: {
    type: String
  },

  Bachelorsdegreeswithoutaccesshourspointcolor: {
    type: String
  },

  Continuingeducationandemploymentratetype: {
    type: String
  },
  
  Medianwagesofbachelorsgradstype: {
    type: String
  },

  Averagecostperbachelorsdegreetype: {
    type: String
  },

  Sixyeargraduationratetype: {
    type: String
  },

  Academicprogress2ndyearretentiontype: {
    type: String
  },

  BachelorsSTEMandstrategicemphasistype: {
    type: String
  },

  UndergraduateswithPellgrantpercenttype: {
    type: String
  },

  GraduateSTEMandstrategicemphasistype: {
    type: String
  },

  Bachelorsdegreeswithoutaccesshourstype: {
    type: String
  },

  year: {
    type:String,
    default: '2016'
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
 
}

var Upload = mongoose.model('Upload', UploadSchema, 'uploads');
module.exports = Upload;
