const   mongoose = require('mongoose'),
        Project = require('./models/project'),
        Service = require('./models/service'),
        Marketing = require('./models/marketing');

const data = [
      {
        name: "mobile healthcare",
        image: "https://www.zibdy.com/Images/logo.png",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        name: "hacking music",
        image: "https://payload.cargocollective.com/1/3/99257/1257378/prt_1301863103.jpeg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        name: "IKANO Bank Personal Savings",
        image: "https://payload106.cargocollective.com/1/3/99257/4439217/prt_1525892591.png",
        description: "Designed as an application for saving money, this application was designed for a market where the majority of users do not use credit. The use of play was a major functionality in the design. Key to the web app's success is the placement of goals within the interface. The popularity of visualizing goals in dream boards was put to use. In addition the app took a holistic view of the users whole economy, so to visualize opportunities to optimize spending in other places in order to arrive at the goal(s) earlier.",
        tech:"Adobe Creative Suite, Javascript, PHP, HTML, CSS",
        reflections:"Without products like MINT in the mainstream, yet. This project was a dive into looking at personal finances from a perspective that I hadn't considered, yet. I was an imposter at this time in my career, I had no financial background or experience other than an ability to design visual concepts at a mediocre level, at best.",

      }
    ]

function seedDB(){
  Project.remove({}, function(err){
    if (err) {
      console.log(err);
    }
    console.log("removed projects");

    data.forEach(function(seed){
      Project.create(seed, function(err, project){
        if (err) {
          console.log(err);
        } else {
          console.log("project added");
        }
      })
    })
  })
};

const data_s = [
      {
        name: "Web Development",
        image: "./img/web_development.png",
        description:"Experts in crafting web sites and web applications for SMB's Digital Y will help your company design a digital presence that meets your busienss needs. This includes content strategy, web flows, conversion funnels and a strategy for cart abandonment with messenger and email tools."
      },
      {
        name: "Social Strategy PPC",
        image: "./img/social_strategy.png",
        description:"A pay per click campaign is when you are targeting a group of people set by your known set of parameters to capture their interest and bring them full cycle into completing your objective. Many times you are selling a physical product, a service, or a subscription. What ever the end goal is, it is very important that you have the flow setup correctly, so that your costs of failure can be minimized. We offer our clients a template to build successful campaigns, excel spreadsheets to manage the results and leading industry toolsets for keeping the sales funnel fresh."
      },
      {
        name: "Web Presence UI/UX",
        image: "./img/ui_ux.png",
        description: "Today anyone can put together a website add items to it and start spending money to target audiences and recieve traffic. Here's the kicker, just because you are getting traffic doesn't mean that viewers are going to buy anything. The purpose of interface and experience design is to make sure that your efforts to generate traffic don't result in cart abandonment, empty forms, and high bounce rates. Digital Y has a long industry history of building UI's with user flows that help companies to prolong user sessions, increase page views and build appropriate lead magnets, so that your company can build a solid user experience, no matter what your objectives may be.",

      }
    ]

function seedDB(){
  Service.remove({}, function(err){
    if (err) {
      console.log(err);
    }
    console.log("removed services");

    data_s.forEach(function(seed){
      Service.create(seed, function(err, service){
        if (err) {
          console.log(err);
        } else {
          console.log("service added");
        }
      })
    })
  })
};

const data_m = [
      {
        name: "Web development",
        description:"front end design and back end development in React or EJS"
      },
      {
        name: "Social Strategy PPC",
        description:"Ad creation from copy writing to image editing."
      },
      {
        name: "Web Presence",
        description: "user experience "
      }
    ]

function seedDB(){
  Marketing.remove({}, function(err){
    if (err) {
      console.log(err);
    }
    console.log("removed marketing");

    data_m.forEach(function(seed){
      Marketing.create(seed, function(err, marketing){
        if (err) {
          console.log(err);
        } else {
          console.log("marketing added");
        }
      })
    })
  })
};
module.exports = seedDB;
