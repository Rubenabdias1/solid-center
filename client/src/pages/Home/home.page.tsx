import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './homePage.styles.module.scss';
import { Link } from 'react-router-dom';
import { useCategoriesQuery } from '../../graphql/generated/graphql';
import { useEffect } from 'react';

export const HomePage = () => {
  const { data, loading, error } = useCategoriesQuery();
  useEffect(() => {
    document.title = 'Solid Center';
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} className={`${styles.homePage || ''}`}>
      {loading ? (
        <h1>Loading...</h1>
      ) : error || !(data && data.categories) ? (
        <h1>Unexpected error.</h1>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Link
              to={`category/${data.categories[0]?.id || ''}`}
              style={{
                backgroundImage: `url(${data.categories[0]?.imgURL || ''})`,
                backgroundSize: 'cover',
              }}
            >
              {data.categories[0]?.name}
            </Link>
          </Grid>
          <Grid item xs={6} md={6}>
            <Link
              to={`category/${data.categories[1]?.id || ''}`}
              style={{
                backgroundImage: `url(${data.categories[1]?.imgURL || ''})`,
                backgroundSize: 'cover',
              }}
            >
              {data.categories[1]?.name}
            </Link>
          </Grid>
          <Grid item xs={6} md={4}>
            <Link
              to={`category/${data.categories[2]?.id || ''}`}
              style={{
                backgroundImage: `url(${data.categories[2]?.imgURL || ''})`,
                backgroundSize: 'cover',
              }}
            >
              {data.categories[2]?.name}
            </Link>
          </Grid>
          <Grid item xs={6} md={4}>
            <Link
              to={`category/${data.categories[3]?.id || ''}`}
              style={{
                backgroundImage: `url(${data.categories[3]?.imgURL || ''})`,
                backgroundSize: 'cover',
              }}
            >
              {data.categories[3]?.name}
            </Link>
          </Grid>
          <Grid item xs={6} md={4}>
            <Link
              to={`category/${data.categories[4]?.id || ''}`}
              style={{
                backgroundImage: `url(${data.categories[4]?.imgURL || ''})`,
                backgroundSize: 'cover',
              }}
            >
              {data.categories[4]?.name}
            </Link>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
