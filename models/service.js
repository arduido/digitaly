const mongoose = require('mongoose');
var serviceSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

module.exports = mongoose.model('Service', serviceSchema);
