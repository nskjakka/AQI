var express = require('express');
var uid = require('uid-safe')
var mongoose = require('mongoose');
var router = express.Router();
var Pollutants = require('../models/pollutants.js');
var calcAQI = require('../calculator/calc.js');

/* POST pollutant values. */
router.post('/', function(req, res, next) {
  // console.log(req.body);
  var key = Object.keys(req.body).find(i=> i !== 'userName' && i !== 'userEmail');
  var data = {
    code: key,
    value: req.body[key]
  };
  var AQI = calcAQI.calcAQI(data);
  res.json(AQI);
  // Pollutants.create(req.body, function (err, post) {
  //   if (err) return next(err);
  //   res.json(post);
  // });
});

module.exports = router;
