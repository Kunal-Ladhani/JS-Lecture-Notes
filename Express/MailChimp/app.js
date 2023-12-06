const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));

const portNum = 4000;

app.get('/', function(req,res) {
    console.log(__dirname);
    res.sendFile(__dirname+'/index.')
});

app.listen(portNum, () => {
    console.log(`server started on port num: ${portNum}`);
});