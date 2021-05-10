const mongoose = require('mongoose');
require('dotenv').config({path: __dirname + '/../.env'});

const connectionString = process.env.MONGO_URI;

module.exports = () => {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Database connected successfully");
        }
    })
}