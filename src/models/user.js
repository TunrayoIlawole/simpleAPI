const mongoose = require('mongoose');

// Create schema
const userSchema = new mongoose.Schema({ 
    name: String, 
    email: String,
    country: String
});

// create a collection "User" from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;