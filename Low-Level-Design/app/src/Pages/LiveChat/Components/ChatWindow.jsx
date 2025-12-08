import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useState } from "react";
import { getRandomName } from "../../../utilities/global";

const CHAT_MESSAGE_LIMIT = 50;

const COMMENTS = [
  {
    id: 1,
    name: "Alice",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    comment: "Hi there! How's everyone doing today?",
  },
];

const ChatWindow = () => {
  const [comments, setComments] = useState(COMMENTS);

  useEffect(() => {
    const fetchComments = () => {
      const newComments = [
        {
          id: Math.random(),
          name: getRandomName(),
          image: "https://randomuser.me/api/portraits/men/2.jpg",
          comment: "I'm doing great, thanks for asking!",
        },
      ];

      setComments((prevComments) => {
        let newMessagesList = [...newComments, ...prevComments];
        newMessagesList = newMessagesList.splice(0, CHAT_MESSAGE_LIMIT);
        return newMessagesList;
      });
    };
    const interval = setInterval(fetchComments, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 mt-2 ml-1 h-full flex-col-reverse">
      {comments?.map((comment) => (
        <ChatMessage key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default ChatWindow;
