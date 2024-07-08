import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
const Message = () => {
  const { chatId } = useParams();
  const [resultmessage, setResultmessage] = useState([]);
  const [sendmessage, setSendmessage] = useState([]);

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
        `http://localhost:5000/api/message/${chatId}`,
        config
      );
      setResultmessage(response.data), console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  }
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
      const body = { content: sendMessage, chatId: chatId };
      const response = await axios.post(
        `http://localhost:5000/api/message`,
        body,
        config
      );
      setSendmessage("");
      fetchMessage();
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchMessage();
  }, [chatId]);
  return (
    <div>
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
          Placeholder="Enter your message"
          onChange={(e) => setSendmessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Message;
