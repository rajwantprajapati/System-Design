const MemeCard = ({ meme }) => {
  const { title, url, author } = meme;

  return (
    <div className="p-5 m-5 border border-black rounded-lg">
      <img src={url} alt={title} className="w-64 h-64" />
      <p>{author}</p>
    </div>
  );
};

export default MemeCard;
