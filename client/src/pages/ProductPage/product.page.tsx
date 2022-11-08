import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

import styles from './productPage.styles.module.scss';
import { useProductQuery } from '../../graphql/generated/graphql';
import { formatCurrency } from '../../utils/formatCurrency';
import { Form, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../utils/cartContext';

export const ProductPage = () => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const { productId, categoryId } = useParams();
  const { data, loading } = useProductQuery({
    variables: { where: { id: parseInt(productId || '0') } },
  });

  useEffect(() => {
    document.title = 'Solid Center - Product';
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : !data || !data.product ? (
    <h1>Product not found.</h1>
  ) : (
    <Card className={`${styles.card || ''}`}>
      <img
        style={{
          height: '400px',
          width: '400px',
          objectFit: 'contain',
          marginRight: '50px',
        }}
        src={data.product.imgURL}
      />
      <div>
        <h1>{data.product.name}</h1>
        <span>
          <b>{formatCurrency(data.product.price as number)}</b>
        </span>
        <br />
        <br />
        <Form action="/cart">
          <FormControl>
            <InputLabel htmlFor="my-input">Quantity</InputLabel>

            <Input
              type="number"
              placeholder="Quantity"
              value={quantity}
              size="small"
              style={{ width: '6rem' }}
              onChange={(e) => {
                setQuantity(parseInt(e.target.value));
              }}
            />
          </FormControl>
          <Button
            type="submit"
            size="small"
            variant="outlined"
            style={{ marginLeft: '1rem' }}
            onClick={() => {
              if (data.product)
                addItem(
                  { ...data.product, categoryId: parseInt(categoryId || '') },
                  quantity
                );
            }}
          >
            Add to Cart
          </Button>
        </Form>
      </div>
    </Card>
  );
};
