import Box from '@mui/material/Box';
import styles from './ProductItem.styles.module.scss';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductItemProps {
  name?: string;
  imgURL?: string;
  price?: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  name = 'Coke',
  imgURL = 'https://images.heb.com/is/image/HEBGrocery/000145352',
  price = 50,
}) => {
  return (
    <Box
      width={'300px'}
      textAlign="center"
      className={`${styles.productItem || ''}`}
    >
      <h2>{name}</h2>
      <img style={{ width: '100%', height: '225px' }} src={imgURL} alt={name} />
      <span>{formatCurrency(price)}</span>
    </Box>
  );
};
