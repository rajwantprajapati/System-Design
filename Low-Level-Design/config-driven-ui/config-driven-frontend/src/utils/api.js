import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  getPageConfig: async (page) => {
    const pageConfig = await axios.get(`${API_URL}/config/${page}`);

    return pageConfig?.data;
  },

  getProducts: async () => {
    const products = await axios.get(`${API_URL}/products`);

    return products?.data;
  },
};
