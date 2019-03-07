var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');

var app = express();
// mongoose.connect('mongoDB_URL', { useNewUrlParser: true }).then(res => {
//     // console.log(res);
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
var pollutants = require('./routes/aqi');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/v1/users', users);
app.use('/pollutants', pollutants);

app.listen(8080);
module.exports = app;
