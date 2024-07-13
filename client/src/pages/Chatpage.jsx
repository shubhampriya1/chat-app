import SideBar from "@/components/SideBar";

const Chatpage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex">
      <div className="w-[300px]">
        <SideBar />
      </div>
      <div className="flex-1 h-screen w-full flex flex-col items-center justify-center">
        <img src="" alt="Logo" />
        <p>Select a chat and start typing</p>
      </div>
    </div>
  );
};

export default Chatpage;
