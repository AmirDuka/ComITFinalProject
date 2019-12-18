const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
  name: String
});
module.exports = mongoose.model('athleteModel', athleteSchema);