const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

//For Heroku deployment
const port = process.env.PORT || 8000;
const dev = '/client/dist';
const prod = '/public';
const env = prod;

mongoose.connect(config.uri, { useMongoClient: true }, (err) => {
    if(err){
        console.log('Could not connect to database: ' + err);
    } else {
        console.log('Connected to database');
    }
});
mongoose.Promise = global.Promise;

// Static directory for frontend
app.use(express.static(__dirname + env))
//Parent autentication route, within this route lies registration and login
app.use('/authentication', authentication);
// Connect server to Angular 4 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + env + '/index.html'));
});
  
app.listen(port, () => {
    console.log('Listening to port '+ port);
});