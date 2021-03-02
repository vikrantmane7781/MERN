require('./db');

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const control = require('./controller/mainController');
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }))
app.listen(process.env.PORT || 1000, () => {
    console.log("Server running on 1000");
})

app.use('/m', control);