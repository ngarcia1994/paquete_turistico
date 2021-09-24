const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Service', ServiceSchema);