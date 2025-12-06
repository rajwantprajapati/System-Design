const HeroSection = ({ config = {} }) => {
  const { title, data = {} } = config;
  const { backgroundColor = "#1f2937", buttonText, subtitle } = data;

  return (
    <section
      style={{ backgroundColor }}
      className="text-white py-16 sm:py-20 lg:py-24 px-4 text-center animate-fade-in"
    >
      <div className="section-container">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10">
            {subtitle}
          </p>
        )}
        {buttonText && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
