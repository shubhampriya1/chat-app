import React from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const SideBar = () => {
  return (
    <div>
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
    </div>
  );
}

export default SideBar
