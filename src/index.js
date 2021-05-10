const express = require('express');
const app = express();
require('dotenv').config({path: __dirname + '/../.env'});

const { PORT } = process.env;

const dbSetup = require('./database/setup');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// setup mongoose
dbSetup();

// routes
app.use(userRoutes);

// PORT
const port = process.env.PORT || PORT;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})