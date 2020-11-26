// require modules
const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

// define User Schema

const userSchema = new Schema({
    googleId: {
        type: String,
    },
    email: {
        type: String,
    },
    avatarURL: {
        type: String,
    },
    diets: {
        type: Schema.Types.ObjectId,
        ref: 'Diet',
    },
    nutrients: {
        type: Schema.Types.ObjectId,
        ref: 'Nutrient',
    },
}, {
    timestamps: true
});

// export schema
module.exports = mongoose.model('User', userSchema);