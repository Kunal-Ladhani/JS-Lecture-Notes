import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

const app = express();
const PORT = process.env.PORT || 3000;
const hostname = "localhost";

console.log(app.path());

app.use(bodyParser.json());

app.use('/', (req, res, next) => {
    console.log(req.headers);
    console.log(res);
    next();
});

app.post('/name/:name', (req, res, next) => {
    const param = req.params.name;
    console.log(param);
    console.log(req.body);
    console.log(req.params);
    res.json({ name: param }).status(200);
    res.send();
    next();
})

app.listen(PORT, hostname, () => {

    console.log('Listening on PORT = ' + PORT);
    console.log(`URL = http://${hostname}:${PORT}`);
});