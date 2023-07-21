import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

// 3rd party dependencies
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";
import { connectDB } from "./util/database";
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from "@nestjs/swagger";
import { ConfigService } from "@nestjs/config";

function setUpSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle("Utkarsh Customer Service")
    .setDescription("Utkarsh-Customer-Onboarding service API description")
    .setVersion("1.0")
    .addBearerAuth()
    // .addServer('http://localhost:3001/sa-uk-cs', 'dev')
    .addServer(app.get(ConfigService).get("server.url"), "uat")
    .build();

  const options: SwaggerDocumentOptions = {
    ignoreGlobalPrefix: true,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup("/product/api-doc", app, document);
}

async function bootstrap() {
  // nestJS app initialization.
  const app = await NestFactory.create(AppModule);
  setUpSwagger(app);

  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters()

  // enable ALL cors requests
  app.use(cors());

  // for using config services
  const configService = app.get(ConfigService);

  // PORT and HOSTNAME Configuration
  config({ path: `config.env` });
  const PORT = process.env.PORT || 8080;
  const HOSTNAME = process.env.HOSTNAME || `localhost`;

  // LOG REQUESTS
  app.use(morgan("tiny"));

  

  app.use(cookieParser());

  // parse request as JSON using body-parser
  app.use(bodyParser.text());
  app.use(bodyParser.json({ limit: "10mb" }));
  app.use(bodyParser.urlencoded({ extended: false }));

  // connect to db.
  // await connectDB();

  // setting up server.
  await app.listen(PORT, HOSTNAME, () => {
    console.log(`Listening on port number : ${PORT}`);
    console.log(`Server Running at : http://${HOSTNAME}:${PORT}`);
  });
}

bootstrap().catch((e) => {
  console.error(e);
  process.exit(0);
});
