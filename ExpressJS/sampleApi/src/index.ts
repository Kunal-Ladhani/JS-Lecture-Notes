import express, { Request, Response, Application, NextFunction } from "express";

const PORT = process.env.PORT || 3000;
const HOSTNAME = `localhost`;

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  res.status(200).json({});
});

app.get("/health", (req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  res.status(200).json({ status: "running" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  next(err);
});

app.listen(PORT, () => {
  console.log("Listening on PORT: " + PORT);
  console.log(`Base URL = http://${HOSTNAME}:${PORT}`);
});
