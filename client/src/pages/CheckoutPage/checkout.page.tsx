import { Card } from '@mui/material';
import styles from './checkoutPage.styles.module.scss';
import { useEffect, useContext } from 'react';
import { CheckoutForm } from '../../Components/CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { CartContext } from '../../utils/cartContext';
import { useNavigate } from 'react-router-dom';

export const CheckoutPage = () => {
  const { clientSecret, stripe } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!clientSecret) return navigate('/cart');
    document.title = 'Solid Center - Checkout';
  }, []);

  return clientSecret ? (
    <Elements stripe={stripe!} options={{ clientSecret }}>
      <Card className={`${styles.checkoutPage || ''}`}>
        <div className={`${styles.sideTable || ''}`}>
          <CheckoutForm />
        </div>
      </Card>
    </Elements>
  ) : (
    <h1>Loading</h1>
  );
};
