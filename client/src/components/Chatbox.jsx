import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Settings, EllipsisVertical, Send } from "lucide-react";
import axios from "axios";
import { Input } from "./ui/input";
import PropType from "prop-types";

const Chatbox = (props) => {
  const [newMessage, setNewMessage] = useState("");
  const [userData, setUserData] = useState({});
  const [resultmessage, setResultmessage] = useState([]);
  const [chatId, setChatId] = useState("");

  const backendUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;
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

      const { data } = await axios.post(
        `${backendUrl}/api/chat`,
        {
          userId: props.chatId,
        },
        config
      );

      setChatId(data._id);
      setUserData(data?.users?.find((user) => user._id !== props.chatId));

      const { data: chats } = await axios.get(
        `${backendUrl}/api/message/${data._id}`,
        config
      );
      setResultmessage(chats);
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
      const body = { content: newMessage, chatId: chatId };
      await axios.post(`${backendUrl}/api/message`, body, config);
      setNewMessage("");
      fetchMessage();
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div className="flex flex-col h-screen ">
      <div className=" w-full py-3 px-3 border-2 flex justify-between rounded-md  bg-slate-600">
        <div className="flex">
          <img
            className="w-10 rounded-full"
            src={userData?.pic}
            onError={(e) => {
              e.target.src = "https://github.com/shadcn.png";
            }}
          />
          <h1 className="mt-3 ml-4 font-bold">{userData?.name}</h1>
        </div>
        <div className="flex mt-2">
          <Link to="/search">
            <Search className="mr-8" />
          </Link>
          <Settings className="mr-8" />
          <EllipsisVertical />
        </div>
      </div>
      <div className="mr-8  flex-1 gap-5 flex flex-col max-h-full overflow-y-scroll mt-5 px-2">
        {resultmessage.map((item, index) => (
          <div
            key={index}
            className={`flex gap-3 items-center ${
              resultmessage?.sender?.id === props.chatId
                ? "justify-start"
                : "justify-end"
            }`}
          >
            <img
              className="h-10 w-10 rounded-full"
              src="https://github.com/shadcn.png"
            />
            <div>
              <h1 className="border-2 rounded-md px-5 py-2">{item.content}</h1>
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
    </div>
  );
};

Chatbox.propTypes = {
  chatId: PropType.string,
};

export default Chatbox;
