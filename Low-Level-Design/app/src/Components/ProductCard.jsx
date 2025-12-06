const ProductCard = ({
  title,
  price,
  thumbnail,
  description,
  discountPercentage,
  onAddToCart,
}) => {
  return (
    <div className="flex flex-col justify-between max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-40 object-cover" src={thumbnail} alt={title} />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {description.split(" ").slice(0, 12).join(" ")}
          {description.split(" ").length > 12 && "..."}
        </p>

        <div>
          <span className="text-lg font-semibold text-indigo-600">
            ${price}
          </span>
          {discountPercentage !== undefined && (
            <span className="ml-2 text-sm text-green-600 font-medium">
              {discountPercentage}% off
            </span>
          )}
        </div>
      </div>

      <button
        onClick={onAddToCart}
        className="w-[90%] self-center  bg-indigo-500 hover:bg-indigo-600 text-white font-bold p-2 rounded-lg transition-colors duration-200 mb-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
