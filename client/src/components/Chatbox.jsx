import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Settings, EllipsisVertical, Send } from "lucide-react";
import axios from "axios";
import { Input } from "./ui/input";
const Chatbox = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const [resultmessage, setResultmessage] = useState([]);
  async function fetchMessage() {
    try {
      const token = Cookies.get("authtoken");
      if (!token) {
        throw new Error("No auth token found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `http://localhost:5000/api/message/${props.chatId}`,
        config
      );
      setResultmessage(response.data), console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchMessage();
  }, [props.chatId]);
  async function sendMessage() {
    try {
      const token = Cookies.get("authtoken");
      if (!token) {
        throw new Error("No auth token found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const body = { content: newMessage, chatId: props.chatId };
      const response = await axios.post(
        `http://localhost:5000/api/message`,
        body,
        config
      );
      setNewMessage("");
      fetchMessage();
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div className="ml-[300px] flex flex-col h-screen">
      <div className=" w-full h-12 border-2 flex justify-between rounded-md  bg-slate-600">
        <div className="flex ">
          <img
            className="w-10 rounded-full"
            src="https://github.com/shadcn.png"
          />
          <h1 className="mt-3 ml-4 font-bold">anu</h1>
        </div>
        <div className="flex mt-2">
          <Link to="/search">
            <Search className="mr-8" />
          </Link>
          <Settings className="mr-8" />
          <EllipsisVertical />
        </div>
      </div>
      <div className="mr-8  flex-1 ">
        {resultmessage.map((item, index) => (
          <div key={index} className="flex  ">
            <img
              className="h-9 mt-7 ml-8 rounded-full"
              src="https://github.com/shadcn.png"
            />
            <div className="h-9 ml-8 mt-8 ">
              <h1 className="border-2 pl-6 pr-5 pt-5 pb-5 rounded-md ">
                {item.content}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <Input
          className="mb-1 mr-1 "
          placeholder="Enter your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <div
          className="bg-blue-500 rounded-md w-10 mb-1 "
          onClick={sendMessage}
        >
          <Send className="mt-3 ml-1" />
        </div>
      </div>
      {/* /  <Message/> */}
    </div>
  );
};

export default Chatbox;
