import asyncHandler from "express-async-handler";
import { Message } from "../model/message.model.js";
import { User } from "../model/user.model.js";
import { chatModel } from "../model/chatModel.model..js";

export const sendMessage = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { content, chatId } = req.body;
  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "name pic");
    message = await message.populate("chat", "name pic");
    message.chat = await User.populate(message.chat, {
      path: "users",
      select: "name pic email",
    });

    await chatModel.findByIdAndUpdate(chatId, {
      latestMessage: message,
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
export const allMessage = asyncHandler(async (req, res) => {
  try {
    const message = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name pic email")
      .populate("chat");
      res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message)
  }
});
