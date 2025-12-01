import { useEffect, useState } from "react";

const useMemes = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fetchMemes = async () => {
    try {
      setShowShimmer(true);
      const response = await fetch(
        "https://meme-api.com/gimme/wholesomememes/20",
      );
      const data = await response.json();

      setMemes((prevMemes) => [...prevMemes, ...data.memes]);
    } catch (error) {
      console.error(error);
    } finally {
      setShowShimmer(false);
    }
  };

  useEffect(() => {
    const fetchInitialMemes = async () => {
      await fetchMemes();
    };

    fetchInitialMemes();
  }, []);

  return { showShimmer, memes, fetchMemes };
};

export default useMemes;
