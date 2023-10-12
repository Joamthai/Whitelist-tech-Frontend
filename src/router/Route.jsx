import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import StorePage from '../pages/StorePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import Authenticated from '../components/auth/Authenticated';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'store', element: <StorePage /> },
      { path: 'product', element: <ProductPage /> },
      { path: 'cart', element: <CartPage /> },
      {
        path: 'profile',
        element: (
          <Authenticated>
            <ProfilePage />
          </Authenticated>
        ),
      },
    ],
  },
  // {
  //   path: '/',
  //   element: (
  //     <Authenticated>
  //       <ProfilePage />
  //     </Authenticated>
  //   ),
  // },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
