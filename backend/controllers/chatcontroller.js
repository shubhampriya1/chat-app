import { chatModel } from "../model/chatModel.model.js.";
import asyncHandler from "express-async-handler";
import { User } from "../model/user.model.js";


 export const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    console.log("userid pram not send");
    return res.sendStatus(400);
  }
  var isChat = await chatModel
    .find({
      isGroupChat: false,
      $and: [
        {
          users: {
            elementMatch: {
              $eq: req.user._id,
            },
          },
          users: {
            elementMatch: {
              $eq: userId,
            },
          },
        },
      ],
    })
    .populate("users", "password")
    .populate("lastestMessage");
  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "Sender",
      isGroupChat: false,
      users: [req.user_id, userId],
    };
    try {
      const createChat = await chatModel.create(chatData);
      const Fullchat = await chatModel
        .findOne({
          _id: createChat._id,
        })
        .populate("users", "password");
      res.status(400).send(Fullchat);
    } catch (error) {
     res.status(500).send({ message: error.message });
    }
  }
});
