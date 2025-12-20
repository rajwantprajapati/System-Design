import Carousel from "../../../Components/Carousel";
import one from "../../../assets/1.jpg";
import two from "../../../assets/2.jpg";
import three from "../../../assets/3.jpg";
import four from "../../../assets/4.jpg";
import five from "../../../assets/5.jpg";

const IMAGES = [one, two, three, four, five];

// .carousel-example img {
//     box-sizing: border-box;
//     height: 100%;
//     width: 100%;
//     min-width: 200px;
//     left: 0;
//     top: 0;
//     object-fit: contain;
//     border-radius: 6px;
// }

const AdvanceCarouselExp = () => {
  return (
    <div className="carousel-example">
      <Carousel>
        {IMAGES.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default AdvanceCarouselExp;
