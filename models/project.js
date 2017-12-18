const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Validate Function to check e-mail length
let emailLengthChecker = (email) => {
  // Check if e-mail exists
  if (!email) {
    return false; // Return error
  } else {
    // Check the length of e-mail string
    if (email.length < 5 || email.length > 30) {
      return false; // Return error if not within proper length
    } else {
      return true; // Return as valid e-mail
    }
  }
};

// Validate Function to check if valid e-mail format
let validEmailChecker = (email) => {
  // Check if e-mail exists
  if (!email) {
    return false; // Return error
  } else {
    // Regular expression to test for a valid e-mail
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email); // Return regular expression test results (true or false)
  }
};

// Array of Email Validators
const emailValidators = [
  // First Email Validator
  {
    validator: emailLengthChecker,
    message: 'E-mail must be at least 5 characters but no more than 30'
  },
  // Second Email Validator
  {
    validator: validEmailChecker,
    message: 'Must be a valid e-mail'
  }
];

// Validate Function to check username length
let usernameLengthChecker = (username) => {
  // Check if username exists
  if (!username) {
    return false; // Return error
  } else {
    // Check length of username string
    if (username.length < 3 || username.length > 15) {
      return false; // Return error if does not meet length requirement
    } else {
      return true; // Return as valid username
    }
  }
};

// Array of Username validators
const usernameValidators = [
  // First Username validator
  {
    validator: usernameLengthChecker,
    message: 'Dealname must be at least 3 characters but no more than 15'
  }
];

// Project Model Definition
const projectSchema = new Schema({
  name: { type: String, required: true},
  role: { type: String, required: true},
  organization: { type: String},
  telephone: { type: Number},
  email: { type: String, required: true, lowercase: true, validate: emailValidators },
  website: { type: String},
  work: { type: String},
  dealName: { type: String, required: true, unique: true, validate: usernameValidators },
  location: { type: String, required: true},
  sector: { type: String, required: true},
  indication: { type: String},
  stageLead: { type: String},
  financing: { type: String},
  investment: { type: String},
  technology: { type: String},
  programDescription: { type: String},
  comments: { type: String},
  fileUrl: { type: String },
  fileName: { type: String },
  createdBy: { type: String},
  createdAt: { type: Date, default: Date.now() },
  likes: { type: Number, default: 0 },
  likedBy: { type: Array },
  views: { type: Number, default: 0 },
  viewedBy: { type: Array }
});

// Export Module/Schema
module.exports = mongoose.model('Project', projectSchema);