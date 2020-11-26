// require modules & init settings variables
const express = require('express');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const morgan = require('morgan');

// define routes
const indexRouter = require('./routes/index');

// env vars
require('dotenv').config();

// create express app
const app = express();

// config server settings
require('./config/database');
require('./config/passport');

app.set('view engine', 'ejs');

// mount middleware
app.use(methodOverride('_method')) 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }));


// passport middleware
app.use(passport.initialize());
app.use(passport.session());


// mount routes
app.use('/', indexRouter);


// tell the app to listen
app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`)
});