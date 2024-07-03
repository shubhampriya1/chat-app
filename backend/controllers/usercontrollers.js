import generateTOken from "../config/jsonwebtoken.js";
import { User } from "../model/user.model.js";
import bcrytpjs from "bcryptjs";
import asyncHandler from "express-async-handler";






export async function register(req, res) {
  try {
    const { name, email, password, pic } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("please your deatails");
    }
    const useremail = await User.find({
      email: email,
    });
    if (useremail.length != 0) {
      return res.status(400).send("Email already exists");
    }
    // const isMatch = await bcrytpjs.compare(password, User.password);
    // if (!isMatch) {
    //   return res.status(404).send("Password in incorrect");
    // }
    const newuser = new User({
      name: name,
      email: email,
      password: password,
      pic: pic,
    });
    await newuser.save();

    return res.status(200).json({
      userId: newuser._id,
      email: newuser.email,
      name: newuser.name,
      pic: newuser.pic,
      token: generateTOken(newuser._userId),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("please fill ur detals");
    }
    const user = await User.findOne({
      $or: [{ email: email }],
    });
    if (!user) {
      return res.status(404).send("No user with provided credentials found");
    }
    res.status(200).json({
      userId: user._id,
      username: user.username,
      useremail: user.email,
      token: generateTOken(user._userId),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

export const allUser = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
      
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});
