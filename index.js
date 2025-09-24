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

const cookieParser = require('cookie-parser');
const fs = require('fs');

app.use(cookieParser());
app.set('trust proxy', true);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/SM', (req, res) => {
  res.sendFile(path.join(__dirname, 'SM.html'));
});

function getTlsInfo(req) {
  try {
    const socket = req.socket || req.connection;
    if (socket && socket.getCipher) {
      const cipher = socket.getCipher ? socket.getCipher() : null;
      const proto = socket.getProtocol ? socket.getProtocol() : null;
      return { cipher, proto };
    }
  } catch (e) {}
  return null;
}

app.post('/collect', (req, res) => {
  const now = new Date().toISOString();
  const ip = req.ip || req.connection.remoteAddress || null;
  const Geolocation = req.body.i || null;
  const headers = req.headers || {};
  const tls = getTlsInfo(req);
  const cookies = req.cookies || {};
  const referer = headers.referer || headers.referrer || null;
  const userAgent = headers['user-agent'] || null;
  const xForwardedFor = headers['x-forwarded-for'] || null;

  const clientReported = req.body.data || {};

  const record = {
    timestamp: now,
    ip,
    Geolocation,
    xForwardedFor,
    referer,
    userAgent,
    headers,
    cookies,
    tls,
    clientReported,

    connectionRemotePort:
      req.connection && req.connection.remotePort
        ? req.connection.remotePort
        : null,
    rawUrl: req.originalUrl,
  };

  fs.appendFile('visitors.log', JSON.stringify(record) + '\n', (err) => {
    if (err) console.error('Failed to write log', err);
  });

  res.json({ status: 'ok', received: true });
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

app.listen(8991);
