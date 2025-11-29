import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    const fetchMemes = async () => {
      const response = await fetch(
        "https://meme-api.com/gimme/wholesomememes/20",
      );
      const data = await response.json();

      setMemes(data.memes);
    };

    fetchMemes();
  }, []);

  return (
    <div className="flex flex-wrap">
      {!memes && <Shimmer />}

      {memes?.map((meme) => (
        <MemeCard key={meme.title} meme={meme} />
      ))}
    </div>
  );
};

export default Body;
