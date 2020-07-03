import express, { NextFunction } from "express";
import bodyParser from "body-parser";
const app = express();
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();
import log from "./utils/log";
import status from "./utils/status";

import appRouter from "./router/app";

app.use(express.static("client/dist"));
app.use(express.json({ limit: "1mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
const corsOptions = {
  origin: (process.env.ORIGIN != undefined) ? process.env.ORIGIN.split(',') : '*',
  methods: ["GET", "OPTIONS", "POST"],
};
app.use(cors(corsOptions));
app.use(appRouter);
app.use(helmet.hidePoweredBy({ setTo: "Nokia 3310" }));

// Error handler
app.use(
  (
    err: number,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if(err == 400){
      log.warn("not a valid email format")
      res.json({
        status: status.BAD_REQUEST,
        result: {
          valid: false,
          mx: null,
          time: null,
          code: null,
          message: "not a valid format"
        },
      });
    }else{
      log.error(err)
      res.json({
        time: +new Date(),
        errorCode: status.SERVER_ERROR,
        error: err,
      });
    }
  }
);

export default app;