const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    // uri: 'mongodb://localhost:27017/virtual-biotech',
    uri: 'mongodb://isaac:pass123@ds161136.mlab.com:61136/angular-4-app', //production
    secret: crypto,
    db: 'angular-4-app'
}