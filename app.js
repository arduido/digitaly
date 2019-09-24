const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  LocalStrategy = require('passport-local'),
  passportLocalMongoose = require('passport-local-mongoose'),
  expressSession = require('express-session'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  Project = require('./models/project'),
  Service = require('./models/service'),
  Marketing = require('./models/marketing'),
  User = require('./models/user'),
  Subscriber = require('./models/subscriber'),
  seed = require('./seeds');
const projectRoutes = require('./routes/projects'),
      serviceRoutes = require('./routes/services'),
      indexRoutes = require('./routes/index'),
      marketingRoutes = require('./routes/marketing')

  mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true });
  var db = mongoose.connection;
  db.on('error',console.error.bind(console, 'connection error:'));
  db.once('open', function(){
    console.log("now connected to the portfolio db");
  });

app.set("view engine", "ejs");
seed();
app.use(express.static("public"));
app.use(expressSession({
  secret:"live to get radical",
  resave: false,
  saveUninitialized: false
  //cookie: {secure: true}
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(__dirname + '/public'));
app.use(indexRoutes);
app.use(projectRoutes);
app.use(serviceRoutes);
app.use(marketingRoutes);
app.listen(3000, function(){
  console.log("app running on port 3000");
});
