import React, { useEffect, useState } from "react";
import axios from "axios";

import SideBar from "@/components/SideBar";

const Chatpage = () => {
  return (
    <div className="relative">
      <SideBar />
      <div className="h-screen w-full flex items-center justify-center">
        Select a chat and Start typing
      </div>
    </div>
  );
};

export default Chatpage;
