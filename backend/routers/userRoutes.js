import { Router } from "express";
import { register, login } from "../controllers/usercontrollers.js";
import { protect } from "../middleware/authMiddleware.js";
import { allUser } from "../controllers/usercontrollers.js";

const authrouter = Router();
authrouter.route("/").post(register)
authrouter.route('/').get(protect, allUser);
authrouter.route("/login").post(login);
export default authrouter;
