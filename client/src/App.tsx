import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { AppContainer } from './Components/AppContainer/AppContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home/home.page';
import { CategoryPage } from './pages/CategoryPage/category.page';
import { ProductPage } from './pages/ProductPage/product.page';
import { CartPage } from './pages/Cart/cart.page';
import { CheckoutPage } from './pages/CheckoutPage/checkout.page';
import { ErrorPage } from './pages/ErrorPage/Error.page';
import { CartContext, CartItem } from './utils/cartContext';
import { useCallback, useState, useEffect } from 'react';
import './App.css';
import { saveCart, addItemToCart } from './utils/cart';

const router = createBrowserRouter([
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
    ],
  },
  {
    path: '/login',
    element: <HomePage />,
  },
]);

const PUBLIC_KEY =
  'pk_test_51Gv8S9H5l65jQ7mTfbAPVAurCDF1effKzNiG0Lsw5wsqa8Ctphhuk6pKt3JRQ7c3Qc1HqK8kizsDAGp02o2srsu800MwA5OfrO';

const stripePromise = loadStripe(PUBLIC_KEY);

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem('cart') || '[]'
    ) as CartItem[];
    setCart(storedCart);
  }, []);

  const addItem = useCallback(
    (product: CartItem['product'], quantity: number) => {
      // Add everything on the previous cart + a new cartItem
      setCart((prev) => addItemToCart(prev, { product, quantity }));
    },
    [setCart]
  );

  const removeItem = useCallback(
    (index: number) => {
      // Filter by the index we are looking to remove
      setCart((prev) => {
        const newCart = [...prev].filter((_, i) => i !== index);
        saveCart(newCart);
        return newCart;
      });
    },
    [setCart]
  );

  const editQuantity = useCallback(
    (index: number, quantity: number) => {
      // Filter by the index we are looking to remove
      setCart((prev) => {
        const newCart = [...prev].map((item, i) => {
          if (i !== index) return { ...item };
          return { ...item, quantity };
        });
        saveCart(newCart);
        return newCart;
      });
    },
    [setCart]
  );

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, addItem, removeItem, editQuantity }}>
        <Elements stripe={stripePromise}>
          <RouterProvider router={router} />
        </Elements>
      </CartContext.Provider>
    </div>
  );
}

export default App;
