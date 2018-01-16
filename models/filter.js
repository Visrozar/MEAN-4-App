const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Filter Model Definition
const filterSchema = new Schema({
    name: { type: String, required: true},
    role: { type: Array},
    sector: { type: Array},
    indication: { type: Array},
    stage: { type: Array},
    createdBy: { type: String, required: true},
    financing: { type: Array}
  });
  
  // Export Module/Schema
  module.exports = mongoose.model('Filter', filterSchema);