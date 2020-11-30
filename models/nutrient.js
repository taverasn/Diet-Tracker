// require modules
const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

// define Nutrient Schema
const nutrientSchema = new Schema({
    name: String,
    description: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, { 
    timestamps: true 
});

// export schema
module.exports = mongoose.model('Nutrient', nutrientSchema); 