const User = require('../models/user'); // Import User Model Schema
const Filter = require('../models/filter'); // Import Filter Model Schema
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {
    router.get('/getFilters', (req, res) => {
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
                res.json({ success: false, message: 'Not allowed' });
              } else {
                if (user.role === 'investor') {
                    Filter.find({ createdBy: user.username}).exec((err, filters) => {
                        if (err) {
                          res.json({ success: false, message: err }); // Return error
                        }
                        else {
                          if (!filters) {
                            res.json({ success: false, message: 'No Filters found' }); // Return error, user was not found in db
                          } else {
                            res.json({ success: true, filters: filters }); // Return success, send filters object to frontend for profile
                          }
                        }
                    });
                } else {
                  res.json({ success: false, message: 'Not allowed' });
                }
              }
              
            }
          }
        });
      });

    router.post('/addFilter', (req, res) => {
        if (!req.body.name) {
            res.json({ success: false, message: 'Name is required' });
        } else {
            if (!req.body.createdBy) {
                res.json({ success: false, message: 'Filter Creator is required' });
            } else {
                const filter = new Filter({
                    name: req.body.name,
                    role: req.body.role,
                    sector: req.body.sector,
                    indication: req.body.indication,
                    stage: req.body.stage,
                    createdBy: req.body.createdBy,
                    financing: req.body.financing
                });
                filter.save((err) => {
                    if (err) {
                        if (err.errors) {
                            res.json({ success: false, message: err.errmsg });
                        } else {
                            res.json({ success: false, message: err });
                        }
                    } else {
                        res.json({ success: true, message: 'Filter Saved' });
                    }
                });
            }
        }
    });

    router.delete('/deleteFilter/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No ID provided' });
        } else {
            Filter.findOne({ _id: req.params.id }, (err, filter) => {
                if(err) {
                    res.json({ sucess: false, message: 'Invalid id'});
                } else {
                    if(!filter) {
                        res.json({ success: false, message: 'Filter was not found' });
                    } else {
                        User.findOne({ _id: req.decoded.userId }, (err, user) => {
                            if(err) {
                                res.json({ success: false, message: err });
                            } else {
                                if(!user) {
                                    res.json({ success: false, message: 'Unable to authenticate User'});
                                } else {
                                    if(user.username !== filter.createdBy) {
                                        res.json({ success: false, message: 'You are not authorized to delete this filter'});
                                    } else {
                                        filter.remove((err) => {
                                            if(err) {
                                                res.json({ success: false, message: err});
                                            } else {
                                                res.json({ success: false, message: 'Filter deleted successfully !'});
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            });
        }
    });

    return router; // Return router object to main index.js
}