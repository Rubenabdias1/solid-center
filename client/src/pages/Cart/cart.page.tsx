import { Card } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import styles from './cart.styles.module.scss';

export const CartPage = () => {
  return (
    <Card className={`${styles.cartPage || ''}`}>
      <div></div>
      <div>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody></tbody>
          <tfoot>
            <tr></tr>
          </tfoot>
        </table>
      </div>
    </Card>
  );
};
