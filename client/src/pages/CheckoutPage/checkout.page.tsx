import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import styles from './checkoutPage.styles.module.scss';

export const CheckoutPage = () => {
  return (
    <Card className={`${styles.checkoutPage || ''}`}>
      <div className={`${styles.sideTable || ''}`}>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td align="right">$700.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>
                <Button variant="contained" style={{ width: '100%' }}>
                  Proceed to Checkout
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Card>
  );
};
