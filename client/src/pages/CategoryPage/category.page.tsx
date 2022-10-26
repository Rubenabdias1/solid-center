import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { ProductItem } from '../../Components/ProductItem/ProductItem';
import styles from './CategoryPage.styles.module.scss';

export const CategoryPage = () => {
  return (
    <Box
      className={`${styles.categoryPage || ''}`}
      sx={{ display: 'flex', flexDirection: 'row' }}
    >
      <div style={{ width: '25%' }}>
        <ul>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">Kids</a>
          </li>
          <li>
            <a href="">Shoes</a>
          </li>
          <li>
            <a href="">Other</a>
          </li>
        </ul>
      </div>
      <Card
        style={{
          marginLeft: '2rem',
          flexGrow: 1,
          padding: '15px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Card>
    </Box>
  );
};
