import { useEffect } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
import useMemes from "../Hooks/useMemes";

const Body = () => {
  const { memes, fetchMemes, showShimmer } = useMemes();

  const handleScroll = () => {
    // window.scrollY: How much user has scrolled
    // window.innerHeight: Height of the viewport
    // document.body.scrollHeight: height of an element's content, including content not visible on the screen due to overflow.

    const { scrollY, innerHeight } = window;

    if (scrollY + innerHeight >= document.body.scrollHeight - 100) {
      fetchMemes();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-wrap">
      {memes?.map((meme, index) => (
        <MemeCard key={`${index}-${meme.title}`} meme={meme} />
      ))}

      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
