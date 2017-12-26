const User = require('../models/user'); // Import User Model Schema
const Project = require('../models/project'); // Import Project Model Schema
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {
    router.post('/newProject', (req, res) => {
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
                            if (!req.body.sector) {
                                res.json({ success: false, message: 'Sector is required' });
                            } else {
                                if (!req.body.createdBy) {
                                    res.json({ success: false, message: 'Project Creator is required' });
                                } else {
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
                                        approvestatus: req.body.approvestatus
                                    });
                                    project.save((err) => {
                                        if (err) {
                                            if (err.errors) {
                                                res.json({ success: false, message: err.errmsg });
                                            } else {
                                                res.json({ success: false, message: err });
                                            }
                                        } else {
                                            res.json({ success: true, message: 'Project Saved' });
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    router.put('/editProject', (req, res) => {
        if (!req.body._id) {
            res.json({ success: false, message: 'No ID provided' });
        } else {
            Project.findOne({ _id: req.body._id }, (err, project) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid Project ID' });
                } else {
                    if (!project) {
                        res.json({ success: false, message: 'Project ID was not found' });
                    } else {
                        User.findOne({ _id: req.decoded.userId }, (err, user) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                if (!user) {
                                    res.json({ success: false, message: 'Unable to authenticate user' });
                                } else {
                                    if (user.username !== project.createdBy && project.likeClick === false) {
                                        res.json({ success: false, message: 'You are not authorized to edit this project' });
                                    } else {
                                        project.name = req.body.name;
                                        project.role = req.body.role;
                                        project.organization = req.body.organization;
                                        project.telephone = req.body.telephone;
                                        project.approvestatus = req.body.approvestatus;
                                        project.email = req.body.email;
                                        project.website = req.body.website;
                                        project.work = req.body.work;
                                        project.dealName = req.body.dealName;
                                        project.location = req.body.location;
                                        project.sector = req.body.sector;
                                        project.indication = req.body.indication;
                                        project.stageLead = req.body.stageLead;
                                        project.financing = req.body.financing;
                                        project.investment = req.body.investment;
                                        project.technology = req.body.technology;
                                        project.programDescription = req.body.programDescription;
                                        project.comments = req.body.comments;
                                        project.fileUrl = req.body.fileUrl;
                                        project.fileName = req.body.fileName;
                                        project.likedBy = req.body.likedBy;
                                        project.viewedBy = req.body.viewedBy;
                                        project.views = req.body.views;
                                        project.save((err) => {
                                            if (err) {
                                                if (err.errors) {
                                                    res.json({ success: false, message: err.errmsg });
                                                } else {
                                                    res.json({ success: false, message: err });
                                                }
                                            } else {
                                                res.json({ success: true, message: 'Project Updated' });
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

    router.delete('/deleteProject/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No ID provided' });
        } else {
            Project.findOne({ _id: req.params.id }, (err, project) => {
                if(err) {
                    res.json({ sucess: false, message: 'Invalid id'});
                } else {
                    if(!project) {
                        res.json({ success: false, message: 'Project was not found' });
                    } else {
                        User.findOne({ _id: req.decoded.userId }, (err, user) => {
                            if(err) {
                                res.json({ success: false, message: err });
                            } else {
                                if(!user) {
                                    res.json({ success: false, message: 'Unable to authenticate User'});
                                } else {
                                    if(user.username !== project.createdBy) {
                                        res.json({ success: false, message: 'You are not authorized to delete this project'});
                                    } else {
                                        project.remove((err) => {
                                            if(err) {
                                                res.json({ success: false, message: err});
                                            } else {
                                                res.json({ success: false, message: 'Project deleted successfully !'});
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