const mongoose = require('mongoose');
require('dotenv').config({path: __dirname + '/.env'});
const { MONGO_URI } = process.env;

const connectionString = MONGO_URI;

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