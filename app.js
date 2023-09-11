const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');

const router = require('./src/routes/api')

const app = express();


app.use(bodyParser.json());
app.use(cookieParser());
app.use(multer().array());
app.use(cors());
app.use(expressMongoSanitize());
app.use(expressRateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
}));

app.use(helmet());
app.use(hpp());



app.use('/',router);

module.exports = app;