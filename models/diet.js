// require modules
const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

// define meals Schema
const mealsSchema = new Schema({
    meals: {
        type: String,
    },
    date: {
        type: Date,
        default: function () {
            const date = new Date();
            const nextYear = date.getFullYear() + 1
            date.setFullYear(nextYear);
            return date;
        }
    },
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
    dietType: {
        type: String,
        enum: ['Fasting', 'Bulking', 'Vegan', 'Low-Carb', 'Vegetarian']
    },
    meals: [mealsSchema],
    startDate: {
        type: Date,
        default: function () {
            const date = new Date();
            const nextYear = date.getFullYear() + 1
            date.setFullYear(nextYear);
            return date;
        }
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