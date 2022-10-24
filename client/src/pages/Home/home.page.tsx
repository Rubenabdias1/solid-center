import { Card } from '@mui/material';
import styles from './home.styles.module.scss';

export const HomePage = () => {
  return <Card className={`${styles.card || ''}`}></Card>;
};
