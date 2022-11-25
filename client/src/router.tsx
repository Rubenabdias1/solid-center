import { createBrowserRouter } from 'react-router-dom';
import { AppContainer } from './Components/AppContainer/AppContainer';
import { HomePage } from './pages/Home/home.page';
import { CategoryPage } from './pages/CategoryPage/category.page';
import { ProductPage } from './pages/ProductPage/product.page';
import { CartPage } from './pages/Cart/cart.page';
import { CheckoutPage } from './pages/CheckoutPage/checkout.page';
import { ErrorPage } from './pages/ErrorPage/Error.page';
import { CompletePage } from './pages/Complete/complete.page';
import { LoginPage } from './pages/Login/login.page';
import { RegisterPage } from './pages/Register/register.page';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/',
    element: <AppContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/category/:categoryId',
        element: <CategoryPage />,
      },
      {
        path: '/category/:categoryId/product/:productId',
        element: <ProductPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
      },
      {
        path: '/complete',
        element: <CompletePage />,
      },
    ],
  },
]);
