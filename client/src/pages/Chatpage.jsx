import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import { Input } from "@/components/ui/input";
import { EllipsisVertical, Send, Settings } from "lucide-react";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  return (
    <div className="relative">
      <div className="w-[300px] absolute">
        <Command className="h-screen border-gray-500 border-r-[1px]">
          <CommandInput
            className="h-18"
            placeholder="Type a command or search..."
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <div className="h-20 ">
                  <div className="w-12 pt-3 ml-3 flex ">
                    <img
                      className="rounded-full"
                      src="https://github.com/shadcn.png"
                    />
                    <h1 className="ml-5 mt-3 font-bold">satu</h1>
                  </div>
                </div>
              </CommandItem>
              <CommandItem>
                <div className="h-20 ">
                  <div className="w-12 pt-3 ml-3 flex  ">
                    <img
                      className="rounded-full"
                      src="https://github.com/shadcn.png"
                    />
                    <h1 className="ml-5 mt-3 font-bold">vandana jha</h1>
                  </div>
                </div>
              </CommandItem>
              <CommandItem>
                <div className="h-20 ">
                  <div className="w-12 pt-3 ml-3 flex  ">
                    <img
                      className="rounded-full"
                      src="https://github.com/shadcn.png"
                    />
                    <h1 className="ml-5 mt-3 font-bold">Shubham</h1>
                  </div>
                </div>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
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
            <Settings className="mr-2" />
            <EllipsisVertical />
          </div>
        </div>
        <div className="mr-8  flex-1 ">
          <div className="flex  ">
            <img
              className="h-9 mt-7 ml-8 rounded-full"
              src="https://github.com/shadcn.png"
            />
            <div className="h-9 ml-8 mt-8 ">
              <h1 className="border-2 pl-6 pr-5 pt-5 pb-5 rounded-md ">
                Hello r
              </h1>
            </div>
          </div>

          <div className="flex mt-14">
            <img
              className="h-9 mt-7 ml-8 rounded-full "
              src="https://github.com/shadcn.png"
            />
            <div className="h-9 ml-8 mt-8 ">
              <h1 className="border-2 pl-6 pr-5 pt-5 pb-5 rounded-md">Hello</h1>
            </div>
          </div>
        </div>

        <div className="flex">
          <Input className="mb-1 mr-1" />
          <div className="bg-blue-500 rounded-md w-10 mb-1 ">
            <Send className="mt-3 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
