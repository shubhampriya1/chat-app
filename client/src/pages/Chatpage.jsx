import React, { useEffect, useState } from "react";
import axios from "axios";
const Chatpage = () => {
  const [chats, setChats] = useState([]);
  useEffect((data) => {
    axios
      .get("http://localhost:5000/api")
      .then((response) => {
        setChats(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return <div>{
    chats.map((i,index)=>{
      return<div key={index}>
      <div>{i.chatName}</div>
   </div>
    })}</div>;
};

export default Chatpage;
