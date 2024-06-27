
import { Router } from "express";
import { register ,login} from "../controllers/usercontrollers.js";

const authrouter = Router();
authrouter.route("/").post(register);
authrouter.route("/login").post(login);
export default authrouter;
