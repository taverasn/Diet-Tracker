// require modules
const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

// define meals Schema
const mealsSchema = new Schema({
    breakfast: String,
    lunch: String,
    dinner: String,
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

// export schema
module.exports = mongoose.model('Meal', mealsSchema); 