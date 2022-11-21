import { Card } from '@mui/material';
import styles from './completePage.styles.module.scss';
import { Link } from 'react-router-dom';

export const CompletePage = () => {
  return (
    <Card className={`${styles.completePage || ''}`}>
      <h1>Thank you for your payment!</h1>
      <span>
        <Link to="/">Keep browsing</Link>
      </span>
    </Card>
  );
};
