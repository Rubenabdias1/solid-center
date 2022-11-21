import { Card } from '@mui/material';
import { Cart } from '../../Components/Cart/Cart';
import styles from './cart.styles.module.scss';
import { CheckoutTable } from '../../Components/CheckoutTable/CheckoutTable';
import { useEffect, useContext } from 'react';
import { CartContext } from '../../utils/cartContext';
import { useNavigate } from 'react-router-dom';

export const CartPage = () => {
  const { clientSecret } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (clientSecret) navigate('/checkout');
  }, [clientSecret]);

  return (
    <Card className={`${styles.cartPage || ''}`}>
      <Cart />
      <div className={`${styles.sideTable || ''}`}>
        <CheckoutTable />
      </div>
    </Card>
  );
};
