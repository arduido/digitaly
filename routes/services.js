const express = require('express');
const router = express.Router();
const Service = require('../models/service');


//=============
//Project ROUTES
//=============

router.get("/services", function(req, res){
  Service.find({}, function(err, allServices){
    if (err) {
      console.log("no projects to retrieve");
    } else {
      res.render("services", {services: allServices});
    }
  });
});
module.exports = router;
