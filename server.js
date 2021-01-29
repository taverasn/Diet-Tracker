const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const dietsRouter = require('./routes/diets');
const nutrientsRouter = require('./routes/nutrients');

const app = express();

app.set('view engine','ejs');

// configure dotenv above the database config
require('dotenv').config();

require('./config/passport');
require('./config/database');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(session({
    resave: false,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

// make req.user available everywhere:
app.use(function(req, res, next) {
    res.locals.user = req.user
    next();
});

app.use('/', indexRouter);
app.use('/diets', dietsRouter);
app.use('/', nutrientsRouter);


app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});