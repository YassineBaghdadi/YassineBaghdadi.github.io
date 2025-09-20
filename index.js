const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('dotenv').config();
const moment = require('moment-timezone');
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname), { index: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(function (req, res) {
  // res.redirect(301, '/');
  res.json({
    error: {
      name: 'Error',
      status: 404,
      message: 'Invalid Request',
      statusCode: 404,
    },
    message: 'wrong url',
  });
});

const port = process.env.PRT || 8991;
app.listen(port);
