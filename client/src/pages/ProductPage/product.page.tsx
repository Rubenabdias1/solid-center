import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import TextField from '@mui/material/TextField';

import styles from './productPage.styles.module.scss';

export const ProductPage = () => {
  return (
    <Card className={`${styles.card || ''}`}>
      <img
        style={{ height: '600px', width: '600px', objectFit: 'contain' }}
        src="https://images.heb.com/is/image/HEBGrocery/000145352"
      />
      <div>
        <h1>Coke</h1>
        <span>
          <b>$2.50</b>
        </span>
        <h3>About this item</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          consectetur doloribus cupiditate veniam velit molestias ex animi harum
          expedita nemo? Suscipit assumenda ad dolor distinctio velit, saepe quo
          earum architecto.
        </p>
        Quantity:{'  '}
        <TextField
          type="number"
          placeholder="Quantity"
          defaultValue={1}
          size="small"
          style={{ width: '6rem' }}
        />
        <br />
        <br />
        <Button variant="outlined" style={{ width: '60%' }}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
