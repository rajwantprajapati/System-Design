import ChatWindow from "./Components/ChatWindow";
import VideoStream from "./Components/VideoStream";

const LiveChat = () => {
  return (
    <div className="h-screen max-h-screen flex gap-2 bg-black text-white">
      <div className="w-full">
        <VideoStream />
      </div>
      <div
        className="w-1/2 border border-gray-600 rounded-lg overflow-y-auto pb-4"
        style={{ scrollbarColor: "#aaa", scrollbarTrackColor: "#000" }}
      >
        <ChatWindow />
      </div>
    </div>
  );
};

export default LiveChat;
