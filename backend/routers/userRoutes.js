
import { Router } from "express";
import { register } from "../controllers/usercontrollers.js";
// import { login } from "../controllers/logincontroller.js";
const authrouter = Router();
authrouter.route("/").post(register);
authrouter.route("/login").post(login);
export default authrouter;
