import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import TextField from '@mui/material/TextField';

import styles from './productPage.styles.module.scss';
import { useProductQuery } from '../../graphql/generated/graphql';
import { formatCurrency } from '../../utils/formatCurrency';

export const ProductPage = () => {
  const { data, loading } = useProductQuery({
    variables: { where: { id: 402 } },
  });

  return loading ? (
    <h1>Loading</h1>
  ) : !data?.product ? (
    <h1>Error</h1>
  ) : (
    <Card className={`${styles.card || ''}`}>
      <img
        style={{
          height: '600px',
          width: '600px',
          objectFit: 'contain',
          marginRight: '50px',
        }}
        src={data.product?.imgURL}
      />
      <div>
        <h1>{data.product?.name}</h1>
        <span>
          <b>{formatCurrency(data.product?.price as number)}</b>
        </span>
        <br />
        <br />
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
