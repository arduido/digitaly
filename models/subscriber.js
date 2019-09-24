const mongoose = require('mongoose');

var SubscriberSchema = new mongoose.Schema({
  email: String
});

module.exports = mongoose.model("Subscriber", SubscriberSchema);
