const mongoose = require('mongoose');
var projectSchema = new mongoose.Schema({
  name: String,
  title: String,
  image: String,
  image1: String,
  description: String,
  tech: String,
  reflections: String
});

module.exports = mongoose.model('Project', projectSchema);
