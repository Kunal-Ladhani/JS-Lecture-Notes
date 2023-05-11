import * as moduleAlias from 'module-alias';
const sourcePath = 'src';
moduleAlias.addAliases({
    '@server': sourcePath,
    '@config': `${sourcePath}/config`,
    '@domain': `${sourcePath}/domain`,
    '@middlewares': `${sourcePath}/middlwares`,
    '@controllers': `${sourcePath}/controllers`,
    '@services': `${sourcePath}/services`,
    '@dtos': `${sourcePath}/dtos`,
    '@errors': `${sourcePath}/errors`,
    '@validators': `${sourcePath}/validators`
});
import { createServer } from '@config/express';
import { AddressInfo } from 'net';
import http from 'http';
import dotenv from 'dotenv';
import express from 'express';

// PORT and HOSTNAME Configuration
dotenv.config({ path: `config.env` });
const host = process.env.HOSTNAME || '`localhost`';
const port = process.env.PORT || 8080;

// setting up server.
const startServer = async () => {
    const app: express.Application = await createServer();
    const server = http.createServer(app).listen({ host, port }, () => {
        const addressInfo = server.address() as AddressInfo;
        console.log(`Listening on port number : ${port}`);
        console.log(`Server started at - http://${addressInfo.address}:${addressInfo.port}`);
        console.log(`Server Running at : http://${host}:${port}`);
    });
};

startServer();