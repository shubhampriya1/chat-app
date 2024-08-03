import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./db/db.js";
import authrouter from "./routers/userRoutes.js";
import chatRoutes from "./routers/chatRouts.js";
import messageRoute from "./routers/messageRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connection();

app.get("/", (_, res) => {
  res.send("Server is ready");
});

app.use("/api/user", authrouter);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoute);
app.use("*", (_, res) => {
  res.status(404).json({ message: "Page not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
