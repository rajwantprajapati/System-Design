const ProductListCard = ({ product }) => {
  const { name, image, featured, description, category, price } = product;

  return (
    <div className="card p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:shadow-xl transition-all cursor-pointer">
      {/* Item Icon */}
      <div className="text-3xl sm:text-4xl shrink-0">{image || "📦"}</div>

      {/* Item Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {name}
          </h3>
          {/* Featured Badge */}
          {featured && (
            <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
              ⭐
            </span>
          )}
        </div>

        {description && (
          <p className="text-sm sm:text-base text-gray-600 line-clamp-1">
            {description}
          </p>
        )}

        {/* Category */}
        {category && (
          <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
            {category}
          </span>
        )}
      </div>

      {/* Price and Action */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start shrink-0">
        <span className="text-lg sm:text-xl font-bold text-[--color-primary]">
          ${price.toFixed(2)}
        </span>
        <button className="text-sm px-4 py-2 bg-blue-50 hover:bg-blue-100 text-[--color-primary] rounded-lg transition-colors font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductListCard;
