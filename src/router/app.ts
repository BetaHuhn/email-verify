import express from "express";
import rateLimit from "express-rate-limit";
import yxc, { connect } from "@dotvirus/yxc";
import { Regex } from "../utils/regex";
import { sendResult } from "../middleware/middleware";
import status from "../utils/status";
import { routeLog } from "../middleware/middleware";
import log from "../utils/log";
import { verify } from "../utils/verify";
import fs from "fs";
const router = express.Router();

const limit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  handler: function (req: express.Request, res: express.Response) {
    log.log(`${req.ip} has exceeded rate limit`);
    res.status(status.TOO_MANY_REQUESTS).send({
      status: status.TOO_MANY_REQUESTS,
      type: "error",
      response: "rate limit exceeded",
      error: {
        text: "rate limit exceeded",
        limit: req.rateLimit.limit,
        current: req.rateLimit.current,
        remaining: req.rateLimit.remaining,
        resetTime: req.rateLimit.resetTime,
      },
    });
  },
  headers: true,
});

router.post(
  "/api/v1/check",
  limit,
  routeLog(),
  connect({
    body: yxc.object({
      email: yxc.string().regex(Regex.email)
    }),
  }),
  async (req, res, next) => {
    try {
      const email: string = req.body.email;

      log.info("Checking: " + email)
      let result = await verify(email);
      sendResult(res, result, status.OK);

    } catch (error) {
      log.error(error);
      next(error);
    }
  }
);

/* Needed to get Vue.js Frontend to work properly */
router.get("*", async (req, res) => {
  let html = fs.readFileSync("./client/dist/index.html", "utf8");
  res.send(html);
})

export default router;
