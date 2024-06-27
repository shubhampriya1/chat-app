import express from "express";
import cors from "cors";
import chats from "./Data/data.js";
import dotenv from "dotenv";

const app = express();
app.use(cors());
dotenv.config();
app.get("/", (req, res) => {
  res.send("sever is ready");
});
app.get("/api", (req, res) => {
  res.send(chats);
});
app.get("/api/:id", (req, res) => {
  const singlechat = chats.find((c) => c._id === req.params.id);
  res.send(singlechat);
  console.log(req.params.id);
});

const Port = process.env.Port || 5000;
app.listen(Port, () => {
  console.log(`sever is running at http://localhost:${Port}`);
});
