// require modules & init settings variables
const express = require('express');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');


// env vars
require('dotenv').config();

// create express app
const app = express();

// define routes
const indexRouter = require('./routes/index');

// config server settings
require('./config/database');
require('./config/passport');

app.set('view engine', 'ejs');

// mount middleware
app.use(methodOverride('_method')) 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }));

  app.use(function(req, res, next) {
    res.locals.user = req.user
    next();
});

// passport middleware
app.use(passport.initialize());
app.use(passport.session());


// mount routes
app.use('/', indexRouter);


// tell the app to listen
app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`)
});