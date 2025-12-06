const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-[--color-primary] rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 font-medium">Loading...</p>
        <p className="text-sm text-gray-500 mt-2">Fetching configuration</p>
      </div>
    </div>
  );
};

export default Loading;
