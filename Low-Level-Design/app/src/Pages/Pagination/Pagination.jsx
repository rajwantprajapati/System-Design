import { useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import ProductCard from "../../Components/ProductCard";
const LIMIT = 20;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const skip = (currentPage - 1) * LIMIT;
  const url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}&select=title,price,description,thumbnail,discountPercentage`;

  const { isLoading, data, error } = useFetch(url);

  const products = data?.products;
  const totalPages = data?.total / LIMIT;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-4">Pagination</h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {products?.length ? (
            <div className="my-4 flex justify-center items-center space-x-2">
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage((current) => current - 1)}
                  className="px-4 py-2 rounded-l-lg bg-linear-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
                  aria-label="Previous Page"
                >
                  &larr; Prev
                </button>
              )}

              <div className="flex space-x-1">
                {[...Array(Math.ceil(totalPages))].map((_, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-medium transition-all duration-200
                      ${
                        index + 1 === currentPage
                          ? "bg-blue-600 text-white shadow-lg scale-110 ring-2 ring-blue-300"
                          : "bg-white text-blue-700 hover:bg-blue-100 border border-blue-200"
                      }
                    `}
                    onClick={() => {
                      setCurrentPage(index + 1);
                    }}
                    aria-current={
                      index + 1 === currentPage ? "page" : undefined
                    }
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage((current) => current + 1)}
                  className="px-4 py-2 rounded-r-lg bg-linear-to-l from-blue-500 to-blue-700 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
                  aria-label="Next Page"
                >
                  Next &rarr;
                </button>
              )}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Pagination;
