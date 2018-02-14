const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const projects = require('./routes/projects')(router);
const filters = require('./routes/filters')(router);
const vcs = require('./routes/vcs')(router);
const bodyParser = require('body-parser');

//For Heroku deployment		 +//mongoose DB connection
const port = process.env.PORT || 8000;
const dev = '/client/dist';
const prod = '/public';
const env = prod;

//mongoose DB connection
mongoose.connect(config.uri, { useMongoClient: true }, (err) => {
    if (err) {
        console.log('Could not connect to database: ' + err);
    } else {
        console.log('Connected to ' + config.db); // Return success message
    }
});
mongoose.Promise = global.Promise;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json());

// Static directory for frontend
app.use(express.static(__dirname + env))
//Parent autentication route, within this route lies registration and login
app.use('/authentication', authentication);
app.use('/projects', projects);
app.use('/filters', filters);
app.use('/vcs', vcs);
// Connect server to Angular 4 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + env + '/index.html'));
});

app.get('**', (req, res) => {
    res.sendFile(path.join(__dirname + env + '/index.html'));
});

app.listen(port, () => {
    console.log('Listening to port ' + port);
});