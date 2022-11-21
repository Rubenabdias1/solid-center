import { loadStripe } from '@stripe/stripe-js';
import { CartContext, CartItem } from './utils/cartContext';
import { useCallback, useState, useEffect } from 'react';
import { saveCart, addItemToCart, getTotal } from './utils/cart';
import {
  PaymentMethodTypes,
  useCreatePaymentIntentMutation,
} from './graphql/generated/graphql';
import './App.css';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

const PUBLIC_KEY =
  'pk_test_51Gv8S9H5l65jQ7mTfbAPVAurCDF1effKzNiG0Lsw5wsqa8Ctphhuk6pKt3JRQ7c3Qc1HqK8kizsDAGp02o2srsu800MwA5OfrO';

const stripe = loadStripe(PUBLIC_KEY);

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [clientSecret, setClientSecret] = useState<string>();
  const [createPaymentIntent] = useCreatePaymentIntentMutation();

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

  const checkoutCart = async () => {
    const amount = getTotal(cart);
    const results = await createPaymentIntent({
      variables: { amount, createPaymentIntentId: PaymentMethodTypes.Card },
    });
    // If we have a client secret
    if (
      results.data?.createPaymentIntent?.success === true &&
      results.data?.createPaymentIntent?.secret
    )
      setClientSecret(results.data.createPaymentIntent.secret);

    return results;
  };

  return (
    <div className="App">
      <CartContext.Provider
        value={{
          stripe,
          cart,
          addItem,
          removeItem,
          editQuantity,
          checkoutCart,
          clientSecret,
        }}
      >
        <RouterProvider router={router} />
      </CartContext.Provider>
    </div>
  );
}

export default App;
