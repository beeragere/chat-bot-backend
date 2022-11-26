import express, { Request, Response } from "express";

import { getUserMessages } from "../services/message.service";
import { ErrorHandler, ErrorType } from "../handlers/errorHandler";

let router = express.Router();
router.get("/user", (req: Request<{ userId: string }>, res: Response) => {
  let userId = req.query.userId as string;
  if (!userId)
    throw new ErrorHandler("userId", "userId is null", ErrorType.HttpGet);
  getUserMessages(userId);
});

export default router;
