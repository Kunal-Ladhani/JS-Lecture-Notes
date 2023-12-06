// Express file

// NODEJS dependencies
import path from 'path';

// 3rd party dependencies
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import express from 'express';
import cors from 'cors';
import { router } from '../routes/api';
import errorHandler from '@middleware/errors/errorHandler';
// importing routes
// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// importing controllers
// const errorController = require('./controllers/error');

// importing models
// const User = require('./models/user');

// importing db connection utility
import { connectDB } from '../utils/database';


const createServer = async (): Promise<express.Application> => {

    // express app initialization.
    const app: express.Application = express();

    // LOG REQUESTS
    app.use(morgan('tiny'));
    // app.use(logger('dev'));

    // Enable ALL cors requests
    app.use(cors());

    // parse cookies
    // app.use(cookieParser());

    // parse request as JSON using express
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // parse request as JSON using body-parser
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: false }));

    // allowing static file serving
    app.use(express.static(path.join(__dirname, 'public')));

    app.disable('x-powered-by');

    app.get('/health', (_req, res, next) => {
        res.send('UP');
    });

    // setting routes for server side app
    // app.use('/admin', adminRoutes);
    // app.use(shopRoutes);
    app.use(router);

    // error handlers
    app.use(errorHandler);

    // establish db connection
    await connectDB();

    return app;
}

export { createServer };