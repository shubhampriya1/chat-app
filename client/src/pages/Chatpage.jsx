import React, { useEffect, useState } from "react";
import "./chatpage.css";
import axios from "axios";
const Chatpage = () => {
  const [chats, setChats] = useState([]);
  // useEffect((data) => {
  //   axios
  //     .get("http://localhost:5000/api")
  //     .then((response) => {
  //       setChats(response.data);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },[]);
  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <img src="https://th.bing.com/th?id=OIP.4nSiPjYiNOlvj6KJiw2UTAAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
          <h1>Shubham Priya</h1>
          <div className="logo">+</div>
        </div>

        <div className="leftline">
          <div className="circle">
            <img src="https://th.bing.com/th?id=OIP.4nSiPjYiNOlvj6KJiw2UTAAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
          </div>
          <h1>Suchi</h1>
        </div>
        <div className="leftline">
          <div className="circle">
            <img src="https://th.bing.com/th?id=OIP.4nSiPjYiNOlvj6KJiw2UTAAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" />
          </div>
          <h1>Suchi</h1>
        </div>
      </div>
      hiiiii
    </div>
  );
};

export default Chatpage;
// {
//   chats.map((i, index) => {
//     return (
//       <div key={index}>
//         <div>{i.chatName}</div>
//       </div>
//     );
//   });
// }
