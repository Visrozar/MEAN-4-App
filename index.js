const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.connect(config.uri, { useMongoClient: true }, (err) => {
    if(err){
        console.log('Could not connect to database: ' + err);
    } else {
        console.log('Connected to database');
    }
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/client/dist/'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});
  
app.listen(8000, () => {
    console.log('Listening to port 8000');
});