"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
function setUpSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Product Microservice")
        .setDescription("Product Microservice API description")
        .setVersion("1.0")
        .addBearerAuth()
        .addServer(app.get(config_1.ConfigService).get("server.url"), "uat")
        .build();
    const options = {
        ignoreGlobalPrefix: true,
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config, options);
    swagger_1.SwaggerModule.setup("/product/api-doc", app, document);
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    setUpSwagger(app);
    const loggerInstance = app.get(common_1.Logger);
    app.useGlobalPipes(new common_1.ValidationPipe({
        disableErrorMessages: false,
        forbidNonWhitelisted: true,
        whitelist: true,
    }));
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)("tiny"));
    app.use((0, cookie_parser_1.default)());
    app.use(body_parser_1.default.text());
    app.use(body_parser_1.default.json({ limit: "10mb" }));
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    (0, dotenv_1.config)({ path: `config.env` });
    const PORT = process.env.PORT || 8080;
    const HOSTNAME = process.env.HOSTNAME || `localhost`;
    await app.listen(PORT, HOSTNAME, () => {
        console.log(`Listening on port number : ${PORT}`);
        console.log(`Server Running at : http://${HOSTNAME}:${PORT}`);
    });
}
bootstrap().catch((e) => {
    console.error(e);
    process.exit(0);
});
//# sourceMappingURL=main.js.map