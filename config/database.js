// require module
const mongoose = require('mongoose');

// shortcut variable
const db = mongoose.connection

// setup settings

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/diet-tracker', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});



// database connection event
db.on('connected', function() {
    console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});

db.on('error', function(error) {
    console.log(`Encountered an error: ${error.message}`);
});
