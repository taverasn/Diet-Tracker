const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const indexCtrl = require('../controllers/index');

// Loads Home Page
router.get('/', indexCtrl.index);

// Login Route
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

// Redirect user to Web Application
router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

// Logout Route
router.get('/logout', function(req, res) {
    req.logOut(); // destroy the session and cookie
    res.redirect('/');
});

module.exports = router;