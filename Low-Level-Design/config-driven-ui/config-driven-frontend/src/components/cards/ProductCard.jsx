const ProductCard = ({ product }) => {
  const { name, description, image, featured, category, price } = product;

  return (
    <div className="card p-4 sm:p-6 group cursor-pointer h-full flex flex-col">
      <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-center transform group-hover:scale-110">
        {image || "📦"}
      </div>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
        {name}
      </h3>

      {description && (
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 grow">
          {description}
        </p>
      )}

      {category && (
        <div className="mb-3">
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      )}

      <div className="flex items-center justify-between mt-auto">
        <span className="text-xl sm:text-2xl font-bold text-[--color-primary]">
          ${price.toFixed(2)}
        </span>

        {featured && (
          <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
            ⭐ Featured
          </span>
        )}
      </div>

      <button className="mt-4 w-full text-sm px-4 py-2 bg-blue-50 hover:bg-blue-100 text-[--color-primary] rounded-lg transiotion-colors font-medium">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
