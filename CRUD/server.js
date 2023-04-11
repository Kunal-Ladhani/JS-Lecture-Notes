const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const routes = require('./server/routes/router');

const app = express();

/*  
.env files allows you to separate your secrets
like db id, password, port num etc.
from source code
*/
// SET CONFIG.ENV FILE
dotenv.config({ path: `config.env` });
const PORT = process.env.PORT || 8080;

// LOG REQUESTS
app.use(morgan('tiny'));

// MONGODB CONNECTION
connectDB();

// PARSE REQUESTS TO body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// SET VIEW ENGINE
// other - pug or html
app.set('view engine', "ejs");
// app.set('views', path.resolve(__dirname, "views/ejs"));

// LOAD ASSETS
app.use('/js', express.static(path.resolve(__dirname, "assets", "js")));
app.use('/css', express.static(path.resolve(__dirname, "assets", "css")));
app.use('/img', express.static(path.resolve(__dirname, "assets", "img")));

// LOAD ROUTERS
app.use('/', routes);

app.get('/', (req, res, next) => {
    res.send('CRUD App Started...');
});

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));