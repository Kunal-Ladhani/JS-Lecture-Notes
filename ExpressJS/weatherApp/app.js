import express from "express";
import { config } from 'dotenv'
import zod from 'zod';

config();

const app = express();
const portNum = 3000;

const schema = zod.object();

const API_KEY = process.env.API_KEY;
const baseURL = `https://api.openweathermap.org/data/2.5/weather`;

const lat = 44.34, lon = 10.99;

app.use(express.json());
app.get("/", async function (req, res) {
    console.log(API_KEY);
    const apiResp = await fetch(`${baseURL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    const resp = await apiResp.json();
    res.status(200).send(resp);
});

app.listen(portNum, () => {
    console.log("Server started on port no = " + portNum);
});