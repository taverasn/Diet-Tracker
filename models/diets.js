// require modules
const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

// define Days Schema
const daysSchema = new Schema({
    sunday: String,
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

// define Diet Schema
const dietSchema = new Schema({
    name: String,
    description: String,
    days: [daysSchema],
    startDate: function () {
        const date = new Date();
        const nextYear = date.getFullYear() + 1
        date.setFullYear(nextYear);
        return date;
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, { 
    timestamps: true 
});


// export schema
module.exports = mongoose.model('Diet', dietSchema); 