var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UploadSchema = {

  uni_name: {
    type: String,
    default: '',
    trim: true,
  },

  uni_short_name: {
    type: String,
    default: '',
    trim: true,
  },

  logo_url: {
    type: String,
    default: '',
  },

  employment_rate: {
    type: Number,
    default: '',
  },

  bachelor_grade: {
    type: Number,
    default: '',
  },

  bachelor_degree: {
    type: Number,
    default: '',
  },

  graduation_rate: {
    type: Number,
    default: '',
  },

  academic_progress: {
    type: Number,
    default: '',
  },

  bachelor_stem: {
    type: Number,
    default: '',
  },

  undergraduate: {
    type: Number,
    default: '',
  },

  graduate_stem: {
    type: Number,
    default: '',
  },

  without_access_hours: {
    type: Number,
    default: '',
  },

  employment_rate_points: {
    type: Number,
    default: '',
  },

  bachelor_grade_points: {
    type: Number,
    default: '',
  },

  bachelor_degree_points: {
    type: Number,
    default: '',
  },

  graduation_rate_points: {
    type: Number,
    default: '',
  },

  academic_progress_points: {
    type: Number,
    default: '',
  },

  bachelor_stem_points: {
    type: Number,
    default: '',
  },

  undergraduate_points: {
    type: Number,
    default: '',
  },

  graduate_stem_points: {
    type: Number,
    default: '',
  },

  without_access_hours_points: {
    type: Number,
    default: '',
  },

  color: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
}

var Upload = mongoose.model('Upload', UploadSchema, 'uploads');
module.exports = Upload;
