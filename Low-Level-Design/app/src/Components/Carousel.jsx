import { useRef, useEffect, useState } from "react";

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselBoxRef = useRef(null);
  const intervalRef = useRef(null);

  const getSlidesInfo = () => {
    const carouselBox = carouselBoxRef.current;
    const slides = carouselBox.children;
    const totalSlides = slides.length;

    return { slides, totalSlides };
  };

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 2000);
  };

  const handlePrev = () => {
    // Stop the interval when the user clicks next
    clearInterval(intervalRef.current);

    const { totalSlides } = getSlidesInfo();

    setActiveIndex((prev) => {
      const newIndex = prev === 0 ? totalSlides - 1 : activeIndex - 1;

      return newIndex;
    });

    startAutoPlay();
  };

  const handleNext = () => {
    // Stop the interval when the user clicks next
    clearInterval(intervalRef.current);

    const { totalSlides } = getSlidesInfo();

    setActiveIndex((prev) => {
      const newIndex = (prev + 1) % totalSlides;

      // slides[prev].classList.remove("show");
      // slides[prev].classList.add("hide");

      // slides[newIndex].classList.remove("hide");
      // slides[newIndex].classList.add("show");

      return newIndex;
    });

    startAutoPlay();
  };

  useEffect(() => {
    // Show the first slide when the component mounts
    const { slides } = getSlidesInfo();

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", index === activeIndex);
    });

    startAutoPlay();

    return () => clearInterval(intervalRef.current);
  }, [activeIndex]);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    startAutoPlay();
  };

  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="min-w-50 h-[60vh] w-[60vw] flex relative">
        <div
          ref={carouselBoxRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="ml-10 min-w-50 w-[60vw] carousel-box relative overflow-hidden"
        >
          {children}
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 w-20 h-20 text-white rounded-full bg-gray-500 z-10"
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-8 w-20 h-20 text-white rounded-full bg-gray-500 z-10"
        >
          Next
        </button>
      </div>

      {/* Stepper */}
      <div className="flex gap-1">
        {Array.from(children).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 rounded-full bg-gray-500 ${index === activeIndex ? "bg-green-500" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
