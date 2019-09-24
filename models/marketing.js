const mongoose = require('mongoose');
var marketingSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,

  description: String
});

module.exports = mongoose.model('Marketing', marketingSchema);
