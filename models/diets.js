// require modules
const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

// define Diet Schema
const dietSchema = new Schema({

}, { 
    timestamps: true 
});


// export schema
module.exports = mongoose.model('Diet', dietSchema); 