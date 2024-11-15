import { Request, Response } from "express";
import path from "path";
import fs from "fs";

export const logger = (req: Request, res: Response) => {
  const { message } = req.body;
  const correlationId = req.headers["x-correlation-id"] as string; // Retrieve correlation ID

  if (!message) {
    res.status(400).json({
      error: "Message is required!",
      correlationId,
    });
  }

  const filePath = path.join(__dirname, "log.txt");

  try {
    // Write the message to a file
    fs.appendFileSync(filePath, `${message}\n`);

    // Respond back with success and correlation ID
    res.status(200).json({
      message: "File saved successfully!",
      correlationId,
    });
  } catch (error) {
    // Respond back with error and correlation ID
    res.status(500).json({
      error: "Something went wrong",
      correlationId,
    });
  }
};
