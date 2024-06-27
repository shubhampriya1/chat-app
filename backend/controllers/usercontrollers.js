import { User } from "../model/user.model.js";

export async function register(req, res) {
  try {
    const { name, email, password, pic } = req.body;
    if (!name || !email || !password ) {
      return res.status(400).send("please your deatails");
    }
    const useremail = await User.find({
      email: email,
    });
    if (useremail.length != 0) {
      return res.status(400).send("Email already exists");
    }

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
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

export async function login(req, res) {
  try {

  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}
export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("please fill ur details");
    }
    const user = await User.findOne({
      $or: [{ email: identifier }],
    });
    if (!user) {
      return res.status(404).send("No user with provided credentials found");
    }
    res.status(200).json({
      userId: user._id,
      username: user.username,
      useremail: user.email,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}
