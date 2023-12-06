const https = require("https");
const express = require("express");

const app = express();
const portNum = 3000;

const API_KEY = `7e6067ea0aa872491fddff71912d1541`;
const baseURL = `https://api.openweathermap.org/data/2.5/weather`;

const lat = 44.34, lon = 10.99;

app.get("/",function(req,res) {
    https.get(baseURL+`?lat=${lat}`+`&lon=${lon}`+`&appid=${API_KEY}`,(resp) => {
        console.log(resp.statusCode);
        console.log(resp);
    });
});

app.listen(portNum, () => {
    console.log("Server started on port no = "+portNum);
})