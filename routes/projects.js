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
                                        createdBy: req.body.createdBy
                                    });
                                    project.save((err) => {
                                        if (err) {
                                            if (err.errors) {
                                                res.json({ success: false, message: 'shimatta' + err.errmsg });
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
        res.json({ success: false, message: 'No ID provided'});
    } else {
        Project.findOne({ _id: req.body._id}, (err, project) => {
            if (err) {
                res.json({ success: false, message: 'Not a valid Project ID'});
            }
        })
    }
})

    return router; // Return router object to main index.js
}