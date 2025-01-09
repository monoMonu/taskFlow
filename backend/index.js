import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();
const app = express();
import { Server } from "socket.io";
import http from "http";
import mongoose from "mongoose";
app.use(express.json());
app.use(cors());
import UserRouter from "./routes/UserRoutes.js";
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
app.use("/", UserRouter);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("a user disconnected: ", socket.id);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});
