import Box from '@mui/material/Box';
import styles from './ProductItem.styles.module.scss';

interface ProductItemProps {
  name?: string;
  imgURL?: string;
  price?: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  name = 'Coke',
  imgURL = 'https://images.heb.com/is/image/HEBGrocery/000145352',
  price = '50.00',
}) => {
  return (
    <Box
      width={'225px'}
      textAlign="center"
      className={`${styles.productItem || ''}`}
    >
      <h2>{name}</h2>
      <img style={{ width: '100%', height: '225px' }} src={imgURL} alt={name} />
      <span>${price}</span>
    </Box>
  );
};
