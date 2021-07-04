import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { userRouter, tagRouter } from "./routes/index";

import "./database";

const app = express();

app.use(express.json());

app.use(userRouter, tagRouter);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      error: err.message
    });
  }
  return response.status(500).json({
    error: "error",
    message: "Internal Server Error"
  });
});

app.listen(3000, () => { console.log('Server is running on port 3000!')});
