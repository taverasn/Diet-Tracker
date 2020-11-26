// require modules
const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

// define Nutrient Schema
const nutrientSchema = new Schema({

}, { 
    timestamps: true 
});


// export schema
module.exports = mongoose.model('Nutrient', nutrientSchema); 