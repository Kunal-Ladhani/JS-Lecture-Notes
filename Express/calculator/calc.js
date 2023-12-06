const express = require("express");
const bodyParser = require("body-parser");
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// using body parser

app.use(express.static('public'));

const portNum = 4000;

app.get(`/`, (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + `/index.html`);
});

/*

https.request()
to make http requests via nodejs



*/


app.post(`/`, (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    res.send(`result=> ${num1} + ${num2} = ${result}`);
});

app.listen(portNum, () => {
    console.log(`server started on port num: ${portNum}`);
});
