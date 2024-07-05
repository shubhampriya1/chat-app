import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { sendMessage } from "../controllers/messagecontroller.js";
const router = express.Router();
router.route("/").post(protect, sendMessage);
export default router;
// route.route("/:chatId").get(protect, allMessage);
