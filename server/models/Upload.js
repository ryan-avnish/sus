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
    type: String,
    default: '',
  },

  bachelor_grade: {
    type: String,
    default: '',
  },

  bachelor_degree: {
    type: String,
    default: '',
  },

  graduation_rate: {
    type: String,
    default: '',
  },

  academic_progress: {
    type: String,
    default: '',
  },

  bachelor_stem: {
    type: String,
    default: '',
  },

  undergraduate: {
    type: String,
    default: '',
  },

  graduate_stem: {
    type: String,
    default: '',
  },

  without_access_hours: {
    type: String,
    default: '',
  },

  employment_rate_points: {
    type: String,
    default: '',
  },

  bachelor_grade_points: {
    type: String,
    default: '',
  },

  bachelor_degree_points: {
    type: String,
    default: '',
  },

  graduation_rate_points: {
    type: String,
    default: '',
  },

  academic_progress_points: {
    type: String,
    default: '',
  },

  bachelor_stem_points: {
    type: String,
    default: '',
  },

  undergraduate_points: {
    type: String,
    default: '',
  },

  graduate_stem_points: {
    type: String,
    default: '',
  },

  without_access_hours_points: {
    type: String,
    default: '',
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
}

var Upload = mongoose.model('Upload', UploadSchema, 'uploads');
module.exports = Upload;
