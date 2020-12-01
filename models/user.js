// require modules
const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

// define User Schema

const userSchema = new Schema({
    displayName: String,
    email: String,
    avatarURL: String,
    googleId: String 
}, { 
    timestamps: true 
});

// export schema
module.exports = mongoose.model('User', userSchema);