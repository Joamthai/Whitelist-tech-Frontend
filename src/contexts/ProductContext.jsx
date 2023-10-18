import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get('/product')
      .then((res) => {
        setAllProducts(res.data.products);
        setAllCategory(res.data.category);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const createProduct = async (data) => {
    const res = await axios.post('/product', data);
    const newProduct = res.data.product;
    setAllProducts([newProduct, ...allProducts]);
  };

  const updateProduct = async (data) => {
    try {
      await axios.patch('/product', data);
      const res = await axios.get('/product');
      setAllProducts(res.data.products);
      setAllCategory(res.data.category);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/product/${productId}`);
      setAllProducts(allProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (productId) => {
    console.log(productId);
    try {
      await axios.get(`/product/${productId}`);
      setProduct(allProducts.filter((product) => product.id === productId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        createProduct,
        updateProduct,
        deleteProduct,
        getProduct,
        product,
        setProduct,
        allCategory,
        setAllCategory,
        allProducts,
        setAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
