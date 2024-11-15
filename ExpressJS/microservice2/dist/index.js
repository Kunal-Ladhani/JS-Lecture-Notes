"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const log_1 = require("./log");
const app = (0, express_1.default)();
const PORT = 4000;
app.use(express_1.default.json());
app.post("/save", log_1.logger);
app.use("/", (req, res) => {
    console.log("hello, world!");
    res.status(200).json({ message: "hello!" });
});
app.listen(PORT, () => {
    console.log(`Service 2 running on port ${PORT}`);
    console.log(`Connect => http://localhost:${PORT}`);
});
