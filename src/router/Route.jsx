import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import StorePage from '../pages/StorePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'store', element: <StorePage /> },
      { path: 'product/:productId', element: <ProductPage /> },
      { path: 'cart', element: <CartPage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
