import express, { Request, Response } from "express";

let router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

export default router;
