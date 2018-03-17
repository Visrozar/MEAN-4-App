const User = require('../models/user'); // Import User Model Schema
const Project = require('../models/project'); // Import Project Model Schema
const Vc = require('../models/vc'); // Import Vc Model Schema
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {
  router.get('/getVcs', (req, res) => {
    // Search for vclist in database
    Vc.find({}).exec((err, vcs) => {
      if (err) {
        res.json({ success: false, message: err }); // Return error
      }
      else {
        if (!vcs) {
          res.json({ success: false, message: 'No VClist found' }); // Return error, vc list was not found in db
        } else {
          res.json({ success: true, vcs: vcs }); // Return success, send vclist object to frontend
        }
      }
    });
  });
  /* ==============
     Register Route
  ============== */
  router.post('/register', (req, res) => {
    // Check if email was provided
    if (!req.body.email) {
      res.json({ success: false, message: 'You must provide an e-mail' }); // Return error
    } else {
      // Check if username was provided
      if (!req.body.username) {
        res.json({ success: false, message: 'You must provide a username' }); // Return error
      } else {
        // Check if password was provided
        if (!req.body.password) {
          res.json({ success: false, message: 'You must provide a password' }); // Return error
        } else {
          // Check if password was provided
          if (!req.body.role) {
            res.json({ success: false, message: 'You must provide a role' }); // Return error
          } else {
            // Create new user object and apply user input
            let user = new User({
              email: req.body.email.toLowerCase(),
              username: req.body.username.toLowerCase(),
              password: req.body.password,
              companyname: req.body.companyname,
              jobtitle: req.body.jobtitle,
              role: req.body.role.toLowerCase(),
              subsector: req.body.subsector,
              indication: req.body.indication,
              financing: req.body.financing,
              therapeutics: req.body.therapeutics,
              diagnostics: req.body.diagnostics,
              agro: req.body.agro
            });
            // Save user to database
            user.save((err) => {
              // Check if error occured
              if (err) {
                // Check if error is an error indicating duplicate account
                if (err.code === 11000) {
                  res.json({ success: false, message: 'Username or e-mail already exists' }); // Return error
                } else {
                  // Check if error is a validation rror
                  if (err.errors) {
                    // Check if validation error is in the email field
                    if (err.errors.email) {
                      res.json({ success: false, message: err.errors.email.message }); // Return error
                    } else {
                      // Check if validation error is in the username field
                      if (err.errors.username) {
                        res.json({ success: false, message: err.errors.username.message }); // Return error
                      } else {
                        // Check if validation error is in the password field
                        if (err.errors.password) {
                          res.json({ success: false, message: err.errors.password.message }); // Return error
                        } else {
                          // Check if validation error is in the role field
                          if (err.errors.role) {
                            res.json({ success: false, message: err.errors.role.message }); // Return error
                          } else {
                            res.json({ success: false, message: err }); // Return any other error not already covered
                          }
                        }
                      }
                    }
                  } else {
                    res.json({ success: false, message: 'Could not save user. Error: ', err }); // Return error if not related to validation
                  }
                }
              } else {
                res.json({ success: true, message: 'Acount registered!' }); // Return success
              }
            });
          }
        }
      }
    }
  });

  router.post('/newUserProject', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          req.body.password = Math.random().toString(36).slice(-8);
          console.log(req.body.password);
          req.body.userRole = 'enterpreneur';
          if (!req.body.email) {
            res.json({ success: false, message: 'You must provide an e-mail' }); // Return error
          } else {
            // Check if username was provided
            if (!req.body.name) {
              res.json({ success: false, message: 'You must provide a username' }); // Return error
            } else {
              // Check if password was provided
              if (!req.body.password) {
                res.json({ success: false, message: 'You must provide a password' }); // Return error
              } else {
                // Check if password was provided
                if (!req.body.userRole) {
                  res.json({ success: false, message: 'You must provide a role' }); // Return error
                } else {
                  // Create new user object and apply user input
                  let user = new User({
                    email: req.body.email.toLowerCase(),
                    username: req.body.name.toLowerCase(),
                    password: req.body.password,
                    role: req.body.userRole.toLowerCase()
                  });
                  // Save user to database
                  user.save((err) => {
                    // Check if error occured
                    if (err) {
                      // Check if error is an error indicating duplicate account
                      if (err.code === 11000) {
                        res.json({ success: false, message: 'Username or e-mail already exists' }); // Return error
                      } else {
                        // Check if error is a validation rror
                        if (err.errors) {
                          // Check if validation error is in the email field
                          if (err.errors.email) {
                            res.json({ success: false, message: err.errors.email.message }); // Return error
                          } else {
                            // Check if validation error is in the username field
                            if (err.errors.username) {
                              res.json({ success: false, message: err.errors.username.message }); // Return error
                            } else {
                              // Check if validation error is in the password field
                              if (err.errors.password) {
                                res.json({ success: false, message: err.errors.password.message }); // Return error
                              } else {
                                // Check if validation error is in the role field
                                if (err.errors.role) {
                                  res.json({ success: false, message: err.errors.role.message }); // Return error
                                } else {
                                  res.json({ success: false, message: err }); // Return any other error not already covered
                                }
                              }
                            }
                          }
                        } else {
                          res.json({ success: false, message: 'Could not save user. Error: ', err }); // Return error if not related to validation
                        }
                      }
                    } else {
                      if (!req.body.name) {
                        res.json({ success: false, message: 'Name is required' });
                      } else {
                        if (!req.body.role) {
                          res.json({ success: false, message: 'Role is required' });
                        } else {
                          if (!req.body.email) {
                            res.json({ success: false, message: 'Email is required' });
                          } else {
                            if (!req.body.dealName) {
                              res.json({ success: false, message: 'Deal Name is required' });
                            } else {
                              if (!req.body.location) {
                                res.json({ success: false, message: 'Location is required' });
                              } else {
                                if (!req.body.createdBy) {
                                  req.body.createdBy = req.body.name;
                                }
                                const project = new Project({
                                  name: req.body.name,
                                  role: req.body.role,
                                  organization: req.body.organization,
                                  telephone: req.body.telephone,
                                  email: req.body.email,
                                  website: req.body.website,
                                  work: req.body.work,
                                  dealName: req.body.dealName,
                                  location: req.body.location,
                                  sector: req.body.sector,
                                  indication: req.body.indication,
                                  stageLead: req.body.stageLead,
                                  financing: req.body.financing,
                                  investment: req.body.investment,
                                  technology: req.body.technology,
                                  programDescription: req.body.programDescription,
                                  comments: req.body.comments,
                                  fileUrl: req.body.fileUrl,
                                  fileName: req.body.fileName,
                                  createdBy: req.body.createdBy,
                                  approvestatus: req.body.approvestatus,
                                  message: req.body.message
                                });
                                project.save((err) => {
                                  if (err) {
                                    if (err.errors) {
                                      res.json({ success: false, message: err.errmsg });
                                    } else {
                                      res.json({ success: false, message: err });
                                    }
                                  } else {
                                    res.json({ success: true, message: 'Project and User Saved' });
                                  }
                                });
                              }
                            }
                          }
                        }
                      }
                    }
                  });
                }
              }
            }
          }
        } else {
          res.json({ success: false, message: 'User is already present' });
        }
      }
    });
  });

  /* ============================================================
     Route to check if user's email is available for registration
  ============================================================ */
  router.get('/checkEmail/:email', (req, res) => {
    // Check if email was provided in paramaters
    if (!req.params.email) {
      res.json({ success: false, message: 'E-mail was not provided' }); // Return error
    } else {
      // Search for user's e-mail in database;
      User.findOne({ email: req.params.email }, (err, user) => {
        if (err) {
          res.json({ success: false, message: err }); // Return connection error
        } else {
          // Check if user's e-mail is taken
          if (user) {
            res.json({ success: false, message: 'E-mail is already taken' }); // Return as taken e-mail
          } else {
            res.json({ success: true, message: 'E-mail is available' }); // Return as available e-mail
          }
        }
      });
    }
  });

  /* ===============================================================
     Route to check if user's username is available for registration
  =============================================================== */
  router.get('/checkUsername/:username', (req, res) => {
    // Check if username was provided in paramaters
    if (!req.params.username) {
      res.json({ success: false, message: 'Username was not provided' }); // Return error
    } else {
      // Look for username in database
      User.findOne({ username: req.params.username }, (err, user) => {
        // Check if connection error was found
        if (err) {
          res.json({ success: false, message: err }); // Return connection error
        } else {
          // Check if user's username was found
          if (user) {
            res.json({ success: false, message: 'Username is already taken' }); // Return as taken username
          } else {
            res.json({ success: true, message: 'Username is available' }); // Return as available username
          }
        }
      });
    }
  });

  /* ========
  LOGIN ROUTE
  ======== */
  router.post('/login', (req, res) => {
    // Check if username was provided
    if (!req.body.username) {
      res.json({ success: false, message: 'No username was provided' }); // Return error
    } else {
      // Check if password was provided
      if (!req.body.password) {
        res.json({ success: false, message: 'No password was provided.' }); // Return error
      } else {
        // Check if username exists in database
        User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
          // Check if error was found
          if (err) {
            res.json({ success: false, message: err }); // Return error
          } else {
            // Check if username was found
            if (!user) {
              res.json({ success: false, message: 'Username not found.' }); // Return error
            } else {
              const validPassword = user.comparePassword(req.body.password, user.password); // Compare password provided to password in database
              // Check if password is a match
              if (!validPassword) {
                res.json({ success: false, message: 'Password invalid' }); // Return error
              } else {
                const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
                res.json({ success: true, message: 'Success!', token: token, user: { username: user.username } }); // Return success and token to frontend
              }
            }
          }
        });
      }
    }
  });

  //Routes that need authentication to be written below the middleware

  /* ================================================
  MIDDLEWARE - Used to grab user's token from headers
  ================================================ */
  router.use((req, res, next) => {
    const token = req.headers['authorization']; // Create token found in headers
    // Check if token was found in headers
    if (!token) {
      res.json({ success: false, message: 'No token provided' }); // Return error
    } else {
      // Verify the token is valid
      jwt.verify(token, config.secret, (err, decoded) => {
        // Check if error is expired or invalid
        if (err) {
          res.json({ success: false, message: 'Token invalid: ' + err }); // Return error for token validation
        } else {
          req.decoded = decoded; // Create global variable to use in any request beyond
          next(); // Exit middleware
        }
      });
    }
  });

  /* ===============================================================
     Route to get user's profile data
  =============================================================== */
  router.get('/profile', (req, res) => {
    // Search for user in database
    User.findOne({ _id: req.decoded.userId }).select('username email role').exec((err, user) => {
      // Check if error connecting
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        // Check if user was found in database
        if (!user) {
          res.json({ success: false, message: 'User not found' }); // Return error, user was not found in db
        } else {
          res.json({ success: true, user: user }); // Return success, send user object to frontend for profile
        }
      }
    });
  });

  router.get('/dashboard', (req, res) => {
    // Search for user in database
    User.findOne({ _id: req.decoded.userId }).select('username role').exec((err, user) => {
      // Check if error connecting
      if (err) {
        res.json({ success: false, message: err }); // Return error
      } else {
        // Check if user was found in database
        if (!user) {
          res.json({ success: false, message: 'User not found' }); // Return error, user was not found in db
        } else {
          if (user.role === 'enterpreneur') {
            Project.find({ createdBy: user.username }).exec((err, projects) => {
              if (err) {
                res.json({ success: false, message: err }); // Return error
              }
              else {
                if (!projects) {
                  res.json({ success: false, message: 'No Projects found' }); // Return error, user was not found in db
                } else {
                  res.json({ success: true, projects: projects }); // Return success, send project object to frontend for profile
                }
              }
            });
          } else {
            if (user.role === 'investor') {
              Project.find({}).exec((err, projects) => {
                if (err) {
                  res.json({ success: false, message: err }); // Return error
                }
                else {
                  if (!projects) {
                    res.json({ success: false, message: 'No Projects found' }); // Return error, user was not found in db
                  } else {
                    res.json({ success: true, projects: projects }); // Return success, send project object to frontend for profile
                  }
                }
              });
            } else {
              if (user.role === 'admin') {
                Project.find({}).exec((err, projects) => {
                  if (err) {
                    res.json({ success: false, message: err }); // Return error
                  }
                  else {
                    if (!projects) {
                      res.json({ success: false, message: 'No Projects found' }); // Return error, user was not found in db
                    } else {
                      res.json({ success: true, projects: projects }); // Return success, send project object to frontend for profile
                    }
                  }
                });
              } else {
                res.json({ success: false, message: 'No Role found' });
              }
            }
          }

        }
      }
    });
  });

  return router; // Return router object to main index.js
}