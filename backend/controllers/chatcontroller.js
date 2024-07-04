// import { chatModel } from "../model/chatModel.model.js.";
import asyncHandler from "express-async-handler";
import { User } from "../model/user.model.js";
import { chatModel } from "../model/chatModel.model..js";


 export const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    console.log("userid prams not send");
    return res.sendStatus(400);
  }
  var isChat = await chatModel
    .find({
      isGroupChat: false,
      $and: [
        {
          users: {
            $elemMatch: {
              $eq:req._id,
            },
          },
          users: {
            $elemMatch: {
              $eq: userId,
            },
          },
        },
      ],
    })
    .populate("users", "-password")
    .populate("latestMessage");

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

// now storing the data in db trycatch

    try {
      const createChat = await chatModel.create(chatData);
      const Fullchat = await chatModel
        .findOne({
          _id: createChat._id,
        })
        .populate("users", "password");
      res.status(200).send(Fullchat);
    } catch (error) {
     res.status(400).send({ message: error.message });
    }
  }
});
