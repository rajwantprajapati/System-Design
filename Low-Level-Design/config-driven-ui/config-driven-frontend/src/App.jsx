import { useState, useEffect } from "react";

import { api } from "./utils/api";
import Loading from "./components/Loading";
import Error from "./components/Error";
import ComponentFactory from "./components/ComponentFactory";

function App() {
  const [config, setConfig] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadInitialData = async () => {
    try {
      setIsLoading(true);

      const [configData, productsData] = await Promise.all([
        api.getPageConfig("home"),
        api.getProducts(),
      ]);
      setConfig(configData.config);
      setProducts(productsData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} onRetry={loadInitialData} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {config?.sections?.map((section) => (
        <ComponentFactory
          key={section.type}
          section={section}
          products={products}
        />
      ))}
    </div>
  );
}

export default App;
