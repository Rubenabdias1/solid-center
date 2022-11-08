import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import styles from './checkoutPage.styles.module.scss';
import { useEffect, useContext } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { CartContext } from '../../utils/cartContext';
import { getTotal } from '../../utils/cart';

export const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  useEffect(() => {
    document.title = 'Solid Center - Checkout';
  }, []);

  const total = getTotal(cart);

  return (
    <Card className={`${styles.checkoutPage || ''}`}>
      <div className={`${styles.sideTable || ''}`}>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td>Total</td>
              <td align="right">{formatCurrency(total)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>
                <Button variant="contained" style={{ width: '100%' }}>
                  PAY {formatCurrency(total)}
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Card>
  );
};
