// require modules
const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

// define Nutrient Schema
const nutrientSchema = new Schema({
    name: String,
    intake: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    },
    diet: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, { 
    timestamps: true 
});

// export schema
module.exports = mongoose.model('Nutrient', nutrientSchema); 