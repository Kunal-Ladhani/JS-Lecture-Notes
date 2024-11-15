"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const logger = (req, res) => {
    const { message } = req.body;
    const correlationId = req.headers["x-correlation-id"]; // Retrieve correlation ID
    if (!message) {
        res.status(400).json({
            error: "Message is required!",
            correlationId,
        });
    }
    const filePath = path_1.default.join(__dirname, "log.txt");
    try {
        // Write the message to a file
        fs_1.default.appendFileSync(filePath, `${message}\n`);
        // Respond back with success and correlation ID
        res.status(200).json({
            message: "File saved successfully!",
            correlationId,
        });
    }
    catch (error) {
        // Respond back with error and correlation ID
        res.status(500).json({
            error: "Something went wrong",
            correlationId,
        });
    }
};
exports.logger = logger;
