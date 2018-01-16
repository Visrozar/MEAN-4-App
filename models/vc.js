const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Vc Model Definition
const vcSchema = new Schema({
    VCName: { type: String, required: true},
    Location: { type: String, required: true},
    InvestmentStage: { type: Array, required: true},
    InvestmentFocus: { type: Array, required: true},
    PreferedIndication: { type: String},
    Featured: { type: String},
    FundStatus: { type: String},
    Research: { type: Object},
    IndustryPartner: { type: String},
    SpecialCriteria: { type: String},
    fileName: { type: String},
    fileUrl: { type: String},
    Website: { type: String}
  });
  
  // Export Module/Schema
  module.exports = mongoose.model('Vc', vcSchema);