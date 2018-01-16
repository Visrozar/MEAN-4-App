const User = require('../models/user'); // Import User Model Schema
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

    router.post('/addVc', (req, res) => {
        if (!req.body.VCName) {
            res.json({ success: false, message: 'Name is required' });
        } else {
            if (!req.body.Location) {
                res.json({ success: false, message: 'Location is required' });
            } else {
                if (!req.body.InvestmentStage) {
                    res.json({ success: false, message: 'InvestmentStage is required' });
                } else {
                    if (!req.body.InvestmentFocus) {
                        res.json({ success: false, message: 'InvestmentFocus is required' });
                    } else {
                        User.findOne({ _id: req.decoded.userId }, (err, user) => {
                            if(err) {
                                res.json({ success: false, message: err });
                            } else {
                                if(!user) {
                                    res.json({ success: false, message: 'Unable to authenticate User'});
                                } else {
                                    if(user.role !== 'admin') {
                                        res.json({ success: false, message: 'You are not authorized to add a VC'});
                                    } else {
                                        const vc = new Vc({
                                            VCName: req.body.VCName,
                                            Location: req.body.Location,
                                            InvestmentStage: req.body.InvestmentStage,
                                            InvestmentFocus: req.body.InvestmentFocus,
                                            PreferedIndication: req.body.PreferedIndication,
                                            Featured: req.body.Featured,
                                            FundStatus: req.body.FundStatus,
                                            Research: req.body.Research,
                                            IndustryPartner: req.body.IndustryPartner,
                                            SpecialCriteria: req.body.SpecialCriteria,
                                            fileName: req.body.fileName,
                                            fileUrl: req.body.fileUrl,
                                            Website: req.body.Website
                                        });
                                        vc.save((err) => {
                                            if (err) {
                                                if (err.errors) {
                                                    res.json({ success: false, message: err.errmsg });
                                                } else {
                                                    res.json({ success: false, message: err });
                                                }
                                            } else {
                                                res.json({ success: true, message: 'VC Saved' });
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                } 
            }
        }
    });
    
    router.put('/editVc', (req, res) => {
        if (!req.body._id) {
            res.json({ success: false, message: 'No ID provided' });
        } else {
            Vc.findOne({ _id: req.body._id }, (err, vc) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid VC ID' });
                } else {
                    if (!vc) {
                        res.json({ success: false, message: 'VC ID was not found' });
                    } else {
                        User.findOne({ _id: req.decoded.userId }, (err, user) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                if (!user) {
                                    res.json({ success: false, message: 'Unable to authenticate user' });
                                } else {
                                    if (user.role !== 'admin') {
                                        res.json({ success: false, message: 'You are not authorized to edit this Vc' });
                                    } else {
                                        vc.VCName = req.body.VCName,
                                        vc.Location = req.body.Location,
                                        vc.InvestmentStage = req.body.InvestmentStage,
                                        vc.InvestmentFocus = req.body.InvestmentFocus,
                                        vc.PreferedIndication = req.body.PreferedIndication,
                                        vc.Featured = req.body.Featured,
                                        vc.FundStatus = req.body.FundStatus,
                                        vc.Research = req.body.Research,
                                        vc.IndustryPartner = req.body.IndustryPartner,
                                        vc.SpecialCriteria = req.body.SpecialCriteria,
                                        vc.fileName = req.body.fileName,
                                        vc.fileUrl = req.body.fileUrl,
                                        vc.Website = req.body.Website
                                        vc.save((err) => {
                                            if (err) {
                                                if (err.errors) {
                                                    res.json({ success: false, message: err.errmsg });
                                                } else {
                                                    res.json({ success: false, message: err });
                                                }
                                            } else {
                                                res.json({ success: true, message: 'VC Updated' });
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            })
        }
    });

    router.delete('/deleteVc/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No ID provided' });
        } else {
            Vc.findOne({ _id: req.params.id }, (err, vc) => {
                if(err) {
                    res.json({ sucess: false, message: 'Invalid id'});
                } else {
                    if(!vc) {
                        res.json({ success: false, message: 'VC was not found' });
                    } else {
                        User.findOne({ _id: req.decoded.userId }, (err, user) => {
                            if(err) {
                                res.json({ success: false, message: err });
                            } else {
                                if(!user) {
                                    res.json({ success: false, message: 'Unable to authenticate User'});
                                } else {
                                    if(user.role !== 'admin') {
                                        res.json({ success: false, message: 'You are not authorized to delete this VC'});
                                    } else {
                                        vc.remove((err) => {
                                            if(err) {
                                                res.json({ success: false, message: err});
                                            } else {
                                                res.json({ success: false, message: 'VC deleted successfully !'});
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