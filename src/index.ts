import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./controller/messages.controller";
import cors from "cors";
const http = require("http");
import { createConnection } from "./database/mongo.init";
const { Server } = require("socket.io");

let app: Express = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

dotenv.config();

io.on("connection", (socket: any) => {
  console.log("a user connected");
});

io.emit("my-event", "-event-from-server");

app.use("/api", router);

app.get("/api", (req: Request, res: Response) => {
  res.send("hello there");
});

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
