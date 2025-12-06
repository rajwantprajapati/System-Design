import ProductCard from "../cards/ProductCard";

const GridSection = ({ config = {}, products = [] }) => {
  const { title, data = {} } = config;
  const { backgroundColor = "#ffffff", columns } = data;

  console.log("columns:", columns);

  return (
    <section style={{ backgroundColor }}>
      <div className="section-container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">
          {title}
        </h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-4 sm:gap-6`}
        >
          {products?.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridSection;
