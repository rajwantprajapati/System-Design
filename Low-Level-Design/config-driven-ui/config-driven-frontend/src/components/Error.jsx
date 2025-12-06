// ============================================
// ERROR COMPONENT
// ============================================
const Error = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 sm:p-8 max-w-md w-full text-center shadow-lg">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-xl sm:text-2xl font-bold text-red-900 mb-3">
          Oops! Something went wrong
        </h2>
        <p className="text-red-700 mb-6 text-sm sm:text-base">{error}</p>
        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
          >
            Try Again
          </button>
          <p className="text-xs text-red-600">
            Make sure the backend server is running on port 5000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
