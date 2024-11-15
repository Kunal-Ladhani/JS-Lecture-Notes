import express, { Request, Response } from "express";
import { sender } from "./sender";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/log", sender);

app.listen(PORT, () => {
  console.log(`Service 1 running on port ${PORT}`);
});
