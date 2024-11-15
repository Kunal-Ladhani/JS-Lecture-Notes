import express, { Request, Response } from "express";
import { logger } from "./log";

const app = express();
const PORT = 4000;

app.use(express.json());

app.post("/save", logger);

app.use("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "hello!" });
});

app.listen(PORT, () => {
  console.log(`Service 2 running on port ${PORT}`);
  console.log(`Connect => http://localhost:${PORT}`);
});
