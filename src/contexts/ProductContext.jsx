import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';
import { getAccessToken } from '../utils/local-storage';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  // const [isRefresh, setIsRefresh] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [orderTotalPrice, setOrderTotalPrice] = useState(0);

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
      // getCartItem();
      getOrder();
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
    const foundCartItem = cartItem.find(
      (cart) => cart.productId == data.productId
    );

    if (foundCartItem) {
      foundCartItem.amount += +data.amount;
      await axios.patch('/cart', foundCartItem);
    } else {
      const res = await axios.post('/cart', data);
      const newCartItem = res.data.cartItem;
      setCartItem([newCartItem, ...cartItem]);
      // setIsRefresh(!isRefresh);
    }
  };

  const increaseAmount = async (data) => {
    try {
      if (data.product.stock > data.amount) {
        data.amount += 1;
        await axios.patch('/cart', data);
        const res = await axios.get('/cart');
        const newCartItem = res.data.cartItem;
        setCartItem(newCartItem);
        const total = newCartItem.reduce((acc, item) => {
          return acc + item?.amount * item.product?.price;
        }, 0);
        setTotalPrice(total);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseAmount = async (data) => {
    try {
      if (data.amount > 1) {
        data.amount -= 1;
        await axios.patch('/cart', data);
        const res = await axios.get('/cart');
        const newCartItem = res.data.cartItem;
        setCartItem(newCartItem);
        const total = newCartItem.reduce((acc, item) => {
          return acc + item?.amount * item.product?.price;
        }, 0);
        setTotalPrice(total);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItem = async () => {
    try {
      const res = await axios.get('/cart');

      const newCartItem = res.data.cartItem;

      setCartItem(newCartItem);

      const total = newCartItem.reduce((acc, item) => {
        return acc + item?.amount * item.product?.price;
      }, 0);

      setTotalPrice(total);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      await axios.delete(`/cart/${productId}`);
      const newCartItem = cartItem.filter(
        (product) => product.product.id !== productId
      );
      setCartItem(newCartItem);
      const total = newCartItem.reduce((acc, item) => {
        return acc + item?.amount * item.product?.price;
      }, 0);

      setTotalPrice(total);
    } catch (error) {
      console.log(error);
    }
  };

  const createOrder = async (data) => {
    try {
      await axios.post('/profile/order', data);
      // setOrder(res.data.order);
      getOrder();
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotalPrice = (order) => {
    return order[0].orderItems?.reduce(
      (sum, item) => sum + +item.totalPrice,
      0
    );
  };

  const getOrder = async () => {
    try {
      const res = await axios.get('/profile/order');

      const newOrder = res.data.order;

      setOrder(newOrder);

      // const totalPrice = order?.orderItems?.reduce(
      //   (sum, item) => sum + +item.totalPrice,
      //   0
      // );

      // setOrderTotalPrice(totalPrice);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (orderId) => {
    await axios.delete(`/profile/order/${orderId}`);
    setOrder(order.filter((order) => order.id !== orderId));
  };

  const uploadPaySlipOrder = async (data) => {
    try {
      await axios.patch('/profile/order/uploadPaySlipOrder', data);
      // const newOrder = [...order];
      // const foundIdx = newOrder.findIndex(
      //   (item) => item.id === res.data.order.id
      // );
      // newOrder.splice(foundIdx, 1, res.data.order);
      // setOrder(newOrder);
      getOrder();
    } catch (error) {
      console.log(error);
    }
  };

  const confirmOrder = async (data) => {
    try {
      await axios.patch('/profile/order/confirmOrder', data);
      // const newOrder = [...order];
      // const foundIdx = newOrder.findIndex(
      //   (item) => item.id === res.data.order.id
      // );
      // newOrder.splice(foundIdx, 1, res.data.order);
      // setOrder(newOrder);
      getOrder();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectOrder = async (data) => {
    try {
      await axios.patch('/profile/order/rejectOrder', data);
      // const newOrder = [...order];
      // const foundIdx = newOrder.findIndex(
      //   (item) => item.id === res.data.order.id
      // );
      // newOrder.splice(foundIdx, 1, res.data.order);
      // setOrder(newOrder);
      getOrder();
    } catch (error) {
      console.log(error);
    }
  };

  const shippedOrder = async (data) => {
    try {
      await axios.patch('/profile/order/shippedOrder', data);
      // const newOrder = [...order];
      // const foundIdx = newOrder.findIndex(
      //   (item) => item.id === res.data.order.id
      // );
      // newOrder.splice(foundIdx, 1, res.data.order);
      // setOrder(newOrder);
      getOrder();
    } catch (error) {
      console.log(error);
    }
  };

  const receivedOrder = async (data) => {
    try {
      await axios.patch('/profile/order/receivedOrder', data);
      // const newOrder = [...order];
      // const foundIdx = newOrder.findIndex(
      //   (item) => item.id === res.data.order.id
      // );
      // newOrder.splice(foundIdx, 1, res.data.order);
      // setOrder(newOrder);
      getOrder();
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
        // isRefresh,
        increaseAmount,
        decreaseAmount,
        createOrder,
        order,
        getOrder,
        deleteOrder,
        setTotalPrice,
        totalPrice,
        calculateTotalPrice,
        // orderTotalPrice,
        uploadPaySlipOrder,
        confirmOrder,
        rejectOrder,
        shippedOrder,
        receivedOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
