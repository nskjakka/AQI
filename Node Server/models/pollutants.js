var mongoose = require('mongoose');

var PollutantsSchema = new mongoose.Schema({
  pm2: Number,
  pm10: Number,
  co: Number,
  o3: Number,
  no2: Number,
  so2: Number,
  nh3: Number,
  pb: Number,
  userName: String,
  userEmail: String
});

module.exports = mongoose.model('Pollutants', PollutantsSchema);
