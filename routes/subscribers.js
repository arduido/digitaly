const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');


router.post("/subscribe", function(req, res){
  var newSubscriber = new Subscriber(req.body.email);
  newSubscriber.save()
  .then(item => {
    res.json("You're subscribed to digitalymedia");
  })
  .catch(err => {
    res.status(400).send("Error! You are not subscribed.")
  });
  res.redirect("landing");
});

module.exports = router;
