import GridSection from "./sections/GridSection";
import HeroSection from "./sections/HeroSection";
import ListSection from "./sections/ListSection";

const ComponentFactory = ({ section, products }) => {
  const components = {
    hero: HeroSection,
    grid: GridSection,
    list: ListSection,
  };

  const Component = components[section.type];

  if (!Component) {
    return <h1>Unknown Section Type: {section.type}</h1>;
  }

  return <Component config={section} products={products} />;
};

export default ComponentFactory;
