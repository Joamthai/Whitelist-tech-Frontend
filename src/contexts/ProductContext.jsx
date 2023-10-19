import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';
import { getAccessToken } from '../utils/local-storage';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [isRefresh, setRefresh] = useState(false);
  const [cartItem, setCartItem] = useState([]);
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
    if (getAccessToken()) {
      getCartItem();
    }
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

  const addToCart = async (data) => {
    console.log(cartItem);
    const foundCartItem = cartItem.find(
      (cart) => cart.productId == data.productId
    );
    console.log(foundCartItem);
    if (foundCartItem) {
      foundCartItem.amount += +data.amount;
      await axios.post('/cart', foundCartItem);
    } else {
      const res = await axios.post('/cart', data);
      const newCartItem = res.data.cartItem;
      setCartItem([newCartItem, ...cartItem]);
    }
  };

  const getCartItem = async () => {
    try {
      const res = await axios.get('/cart');
      const getCartItem = res.data.cartItem.map((item) => {
        return { id: item.id, productId: item.productId, amount: item.amount };
      });
      setCartItem(getCartItem);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      await axios.delete(`/cart/${productId}`);
      setCartItem(cartItem.filter((product) => product.id !== productId));
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
        allCategory,
        setAllCategory,
        allProducts,
        setAllProducts,
        addToCart,
        getCartItem,
        cartItem,
        deleteFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
