import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import StorePage from '../pages/StorePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import Authenticated from '../components/auth/Authenticated';
import OrderPage from '../pages/OrderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'store', element: <StorePage /> },
      { path: 'product/:id', element: <ProductPage /> },
    ],
  },
  {
    path: '/',
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      { path: 'profile', element: <ProfilePage /> },
      { path: 'order', element: <OrderPage /> },
      { path: 'cart', element: <CartPage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
