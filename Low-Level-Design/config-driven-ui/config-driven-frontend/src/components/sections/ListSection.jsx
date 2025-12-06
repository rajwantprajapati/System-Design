import ProductListCard from "../cards/ProductListCard";

const ListSection = ({ config, products }) => {
  const { title, data = {} } = config;
  const limit = data.limit || products.length;
  const bgColor = data.backgroundColor || "#f3f4f6";
  const displayProducts = products.slice(0, limit);

  return (
    <section
      className="py-12 sm:py-16 px-4 animate-slideUp"
      style={{ backgroundColor: bgColor }}
    >
      <div className="section-container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center">
          {title}
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {displayProducts.map((product) => (
            <ProductListCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListSection;
