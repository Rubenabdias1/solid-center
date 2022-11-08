import Button from '@mui/material/Button';
import { Form } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../utils/cartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { getTotal } from '../../utils/cart';

type CheckoutTableProps = { className?: string };

export const CheckoutTable: React.FC<CheckoutTableProps> = () => {
  const { cart } = useContext(CartContext);

  const total = getTotal(cart);

  return (
    <Form style={{ width: '100%' }} action="/checkout">
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>Total</td>
            <td align="right">{formatCurrency(total)}</td>
          </tr>

          <tr>
            <td>Shipping</td>
            <td align="right">Free</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <Button
                type="submit"
                variant="contained"
                style={{ width: '100%' }}
              >
                Proceed to Checkout
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </Form>
  );
};
