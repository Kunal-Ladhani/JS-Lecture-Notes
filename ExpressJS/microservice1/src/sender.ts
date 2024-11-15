import { Request, Response } from "express";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const sender = async (req: Request, res: Response) => {
  const { message } = req.body;
  const correlationId = uuidv4(); // Generate a correlation ID

  if (!message) {
    res.status(400).json({ error: "Message is required" });
  }

  try {
    // Send message to Service 2
    const response = await axios.post(
      "http://localhost:4000/save",
      { message },
      {
        headers: { "x-correlation-id": correlationId },
      }
    );

    // Respond back with Service 2 response and correlation ID
    res.status(200).json({
      message: response.data.message,
      correlationId,
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong",
      correlationId,
    });
  }
};
