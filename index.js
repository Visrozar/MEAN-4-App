const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const projects = require('./routes/projects')(router);
const bodyParser = require('body-parser');

//mongoose DB connection
mongoose.connect(config.uri, { useMongoClient: true }, (err) => {
    if(err){
        console.log('Could not connect to database: ' + err);
    } else {
        console.log('Connected to database');
    }
});
mongoose.Promise = global.Promise;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

//parse application/json
app.use(bodyParser.json());

// Static directory for frontend
app.use(express.static(__dirname + '/client/dist/'))
//Parent autentication route, within this route lies registration and login
app.use('/authentication', authentication);
app.use('/projects', projects);
// Connect server to Angular 4 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});
  
app.listen(8000, () => {
    console.log('Listening to port 8000');
});