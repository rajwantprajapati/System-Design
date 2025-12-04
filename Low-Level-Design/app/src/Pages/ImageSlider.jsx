import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80", // night city lights [web:25]
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&h=900&q=80", // mountain landscape [web:26]
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // mountains & lake [web:29]
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80", // modern office workspace [web:33]
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80", // nature landscape [web:35]
];

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  const loadPrevImage = () => {
    setActive((active) =>
      active === 0 ? SLIDER_IMAGES.length - 1 : active - 1,
    );
  };

  const loadNextImage = () => {
    setActive((active) => (active + 1) % SLIDER_IMAGES.length);
  };

  useEffect(() => {
    // INFO: Auto slide images after 1 sec interval
    const interval = setInterval(() => {
      loadNextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-4">
      <h1 className="text-2xl font-bold mb-6">Image Slider Example</h1>

      <div className="flex justify-center items-center">
        <ChevronLeft
          onClick={loadPrevImage}
          size="40"
          className="cursor-pointer"
        />

        <img
          src={SLIDER_IMAGES[active]}
          alt="wallpaper"
          className="w-90 h-60 object-contain"
        />

        <ChevronRight
          onClick={loadNextImage}
          size="40"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
