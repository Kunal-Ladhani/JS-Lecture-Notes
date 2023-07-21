import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// 3rd party dependencies
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import cors from 'cors';

// importing db connection utility
import { connectDB } from './util/database';

import { CORS_OPTIONS } from './constants/cors-options';

async function bootstrap() {
  // NESTjs app initialization.
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe()
  );

  // PORT and HOSTNAME Configuration
  config({ path: `config.env` });
  const PORT = process.env.PORT || 8080;
  const HOSTNAME = process.env.HOSTNAME || `localhost`;

  // LOG REQUESTS
  app.use(morgan('tiny'));

  // Enable ALL cors requests
  app.use(cors(CORS_OPTIONS));
  app.use('*', cors(CORS_OPTIONS));

  app.use(cookieParser());

  // parse request as JSON using body-parser
  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // connect to db.
  await connectDB();

  // setting up server.
  await app.listen(PORT, HOSTNAME, () => {
    console.log(`Listening on port number : ${PORT}`);
    console.log(`Server Running at : http://${HOSTNAME}:${PORT}`);
  });
}

bootstrap()
  .catch((e) => {
    console.error(e);
    process.exit(0);
  });




