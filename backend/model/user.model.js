import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    pic: {
      type: String,
      require: true,
      default:
        "https://th.bing.com/th?id=OIP.4nSiPjYiNOlvj6KJiw2UTAAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
    },
  },
  { timestamps: true }
);
export const user = mongoose.model("user", userSchema);
