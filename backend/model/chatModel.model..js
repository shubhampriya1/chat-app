import mongoose from "mongoose";

const chatModelSchema = new mongoose.Schema({
  chatName: {
    type: String,
    trim: true,
  },
  isGroupChat: {
    type: Boolean,
    default: falses,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  latestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  grophAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},{timeseries:true});
export const chatModel =mongoose.model("chatModel", chatModelSchema);
// chatname
//group