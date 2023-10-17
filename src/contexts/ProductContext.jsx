import { createContext, useState } from 'react';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);

  const createProduct = async (data) => {
    const res = await axios.post('/product', data);
    const newProduct = res.data.product;
    setAllProducts([newProduct, ...allProducts]);
  };

  const updateProduct = async (data) => {
    const res = await axios.patch('/product', data);
    console.log(res);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/product/${productId}`);
      setAllProducts(allProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={
        (createProduct,
        allCategory,
        setAllCategory,
        allProducts,
        setAllProducts)
      }
    >
      {children}
    </ProductContext.Provider>
  );
}
