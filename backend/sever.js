import express from "express";
import cors from "cors";
import chats from "./Data/data.js";
import dotenv from "dotenv";
import connection from "./db/db.js";
import authrouter from "./routers/userRoutes.js";
import chatRoutes from "./routers/chatRouts.js";
import messageRoute from "./routers/messageRoutes.js"
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
connection();
app.get("/", (req, res) => {
  res.send("sever is ready");
});
app.get("/api", (req, res) => {
  res.send(chats);
});


app.use("/api/user", authrouter);
app.use("/api/chat", chatRoutes);
app.use("/api/message",messageRoute)
const Port = process.env.Port || 5000;
app.listen(Port, () => {
  console.log(`sever is running at http://localhost:${Port}`);
});
