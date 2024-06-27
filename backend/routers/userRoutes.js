import express from "express";
import { Router } from "express";
import { register } from "../controllers/usercontrollers.js";
const authrouter = Router();
authrouter.route("/").post(register);
// authrouter.route("/login").post(login);
export default authrouter;
