import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split("")[1];
      const decode = jwt.verify(token, process.env.jwt_Secert);
      req.user = await user.findById(decode.id).select("password");
      next();
    } catch (error) {
         return res.status(500).send("Not authorised");
    }
  }
});
