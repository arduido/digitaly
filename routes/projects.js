const express = require('express');
const router = express.Router();
const Project = require('../models/project');


//=============
//Project ROUTES
//=============

router.get("/projects",isLoggedIn, function(req, res){
  Project.find({}, function(err, allProjects){
    if (err) {
      console.log("no projects to retrieve");
    } else {
      res.render("projects", {projects: allProjects});
    }
  });
});

router.get("/projects/new", function(req, res){
  res.render("new");
});

router.post("/projects", isLoggedIn, function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var image1 = req.body.image1;
  var description = req.body.description;
  var tech = req.body.tech;
  var reflections = req.body.reflections;
  var _id = req.params.id;
  var newProject = {name: name, image: image, image1: image1, description: description, tech: tech, reflections: reflections, _id: _id}
  Project.create(newProject, function(err, newProject){
    if (err) {
      console.log("project creation failed");
    }else {
      res.redirect("projects")
    }
  })
});

router.get("/projects/:id", function(req, res){
  Project.findById(req.params.id).exec(function(err, foundproject){
    if (err) {
      console.log("no project found");
    }else {
      res.render("show", {project:foundproject})
    }
  })
});
//edit projects
router.get("/projects/:id/edit", function(req, res){
  res.render("edit");
})
//update project
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("login");
};
module.exports = router;
