import { Card } from '@mui/material';
import { Cart } from '../../Components/Cart/Cart';
import styles from './cart.styles.module.scss';
import { CheckoutTable } from '../../Components/CheckoutTable/CheckoutTable';

export const CartPage = () => {
  return (
    <Card className={`${styles.cartPage || ''}`}>
      <Cart />
      <div className={`${styles.sideTable || ''}`}>
        <CheckoutTable />
      </div>
    </Card>
  );
};
