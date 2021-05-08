const express = require('express');
const app = express();

const { PORT } = process.env;

const dbSetup = require('./database/setup');

app.use(express.json());

// setup mongoose
dbSetup();

// PORT
const port = process.env.PORT || PORT;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})