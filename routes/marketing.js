const express = require('express');
const router = express.Router();
const Marketing = require('../models/marketing');


//=============
//Project ROUTES
//=============

router.get("/marketing", function(req, res){
  Marketing.find({}, function(err, allMarketing){
    if (err) {
      console.log("no projects to retrieve");
    } else {
      res.render("marketing", {marketing: allMarketing});
    }
  });
});
module.exports = router;
