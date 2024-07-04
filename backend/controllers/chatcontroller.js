// import { chatModel } from "../model/chatModel.model.js.";
import asyncHandler from "express-async-handler";
import { User } from "../model/user.model.js";
import { chatModel } from "../model/chatModel.model..js";

export const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("userid param not sent");
    return res.sendStatus(400);
  }

  try {
    // Check if a chat exists between the current user and userId
    const existingChat = await chatModel
      .findOne({
        isGroupChat: false,
        users: { $all: [req.user._id, userId] },
      })
      .populate("users", "-password")
      .populate("latestMessage");

    if (existingChat) {
      // If chat exists, return it
      res.send(existingChat);
    } else {
      // If chat doesn't exist, create a new chat
      const chatData = {
        chatName: "Direct Chat", // Optionally, you can give a name to the chat
        isGroupChat: false,
        users: [req.user._id, userId],
      };

      const newChat = await chatModel.create(chatData);

      // Populate the newly created chat with user details
      const populatedChat = await chatModel
        .findById(newChat._id)
        .populate("users", "-password");

      res.status(200).send(populatedChat);
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error in accessing/changing chat:", error);
    res.status(500).send({ message: "Failed to access/change chat." });
  }
});

export const fetchChat = asyncHandler(async (req, res) => {
  try {
    chatModel
      .find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("grophAdmin", "-password")
      .populate("latestMessage")
      .sort({ updateAt: -1 })
      .then(async (results) => {
        const populatedResults = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
//createchatgroup
export const createGroupChat = asyncHandler(async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "please fill details" });
  }
  var users = JSON.parse(req.body.users);
  if (users.length < 2) {
    return res
      .status(400)
      .send("More than 2 users are required to form a group chat");
  }

  users.push(req.user);

  var users = JSON.parse(req.body.users);
  try {
    const groupChat = await chatModel.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      grophAdmin: req.user,
    });

    const fullGroupChat = await chatModel
      .findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("grophAdmin", "-password");

    res.status(200).json(fullGroupChat);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

export const renameGroup = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;
  const updatesChat = await chatModel
    .findByIdAndUpdate(
      chatId,
      {
        chatName,
      },
      {
        new: true,
      }
    )
    .populate("users", "-password")
    .populate("grophAdmin", "-password");

  if (!updatesChat) {
    res.status(404);
    throw new Error(error.message);
  } else {
    res.json(updatesChat);
  }
});

export const addGroup = asyncHandler(async (req, res) => {

});
export const removeFromGroup = asyncHandler(async (req, res) => {
  
});
