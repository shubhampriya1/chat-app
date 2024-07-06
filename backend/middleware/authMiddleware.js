import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User } from "../model/user.model.js";
export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
     console.log("running from her1");
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.jwt_Secert);
      req.user = await User.findById(decode._id).select("-password");
        
      console.log("running from here");
      next();
    } catch (error) {
      return res.status(500).send("Not authorised");
    }
  }
});
