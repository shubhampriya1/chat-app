import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
import SideBar from "@/components/SideBar";
import Chatbox from "@/components/Chatbox";
const Message = () => {
  const { chatId } = useParams();
  const [resultmessage, setResultmessage] = useState([]);
  const [newMessage, setNewMessage] = useState([]);

  return (
    <div className="relative">
      <SideBar />
      <Chatbox chatId={chatId} />
      {/* <div className="ml-[300px]">
        {resultmessage.length > 0 ? (
          resultmessage.map((message, index) => (
            <div key={index}>
              <h1>{message.content}</h1>
            </div>
          ))
        ) : (
          <h1>No messages found</h1>
        )}
        <div>
          <Input
            placeholder="Enter your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button >Send</button>
        </div>
      </div> */}
    </div>
  );
};

export default Message;
