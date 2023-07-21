"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    (0, dotenv_1.config)({ path: `config.env` });
    const PORT = process.env.PORT || 8080;
    const HOSTNAME = process.env.HOSTNAME || `localhost`;
    app.use((0, morgan_1.default)('tiny'));
    app.use((0, cors_1.default)());
    app.use((0, cookie_parser_1.default)());
    app.use(body_parser_1.default.text());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: false }));
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
//# sourceMappingURL=main.js.map