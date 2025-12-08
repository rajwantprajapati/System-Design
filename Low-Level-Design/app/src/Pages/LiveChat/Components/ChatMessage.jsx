const ChatMessage = ({ name, image, comment }) => {
  return (
    <div className="flex gap-1">
      <img src={image} alt={name} className="w-6 h-6 rounded-full mr-1" />

      <p>
        <span className="text-sm font-bold mr-1">{name}</span>
        <span className="text-sm">{comment}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
