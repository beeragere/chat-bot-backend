import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./controller/messages.router";
import { createConnection } from "./database/mongo.init";
dotenv.config();

let app: Express = express();

createConnection();

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});

app.use("/messages", router);
