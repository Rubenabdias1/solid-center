import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { ProductItem } from '../../Components/ProductItem/ProductItem';
import styles from './CategoryPage.styles.module.scss';
import { SortOrder, useProductsQuery } from '../../graphql/generated/graphql';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

export const CategoryPage = () => {
  const { categoryId } = useParams();

  useEffect(() => {
    document.title = 'Solid Center - Categories';
  }, []);

  const { data, loading } = useProductsQuery({
    variables: {
      where: { categoryId: { equals: parseInt(categoryId || '0') } },
      orderBy: [{ name: SortOrder.Asc }],
      take: 20,
    },
  });

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <Box
      className={`${styles.categoryPage || ''}`}
      sx={{ display: 'flex', flexDirection: 'row' }}
    >
      <div style={{ width: '35%' }}>
        <ul>
          <li>
            <Link to={`/category/1`}>Produce</Link>
          </li>
          <li>
            <Link to={`/category/2`}>Meat & Seafood</Link>
          </li>
          <li>
            <Link to={`/category/3`}>Bakery & Bread</Link>
          </li>
          <li>
            <Link to={`/category/4`}>Beverages</Link>
          </li>
          <li>
            <Link to={`/category/5`}>Pantry</Link>
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
        {data &&
          data.products &&
          data.products.map((p, index) => (
            <Link to={`product/${p.id}`} style={{ all: 'unset' }} key={index}>
              <ProductItem name={p.name} imgURL={p.imgURL} price={p.price} />
            </Link>
          ))}
      </Card>
    </Box>
  );
};
