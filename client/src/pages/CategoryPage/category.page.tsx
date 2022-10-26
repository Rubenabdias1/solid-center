import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export const CategoryPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Button
            style={{
              color: 'white',
              width: '100%',
              height: '270px',
              backgroundImage:
                'url("https://cdn.shopify.com/s/files/1/0004/4885/6125/files/collections-men.jpg?v=1526942544")',
              backgroundSize: 'cover',
            }}
          >
            Men
          </Button>
        </Grid>
        <Grid item xs={6} md={6}>
          <Button
            style={{
              color: 'white',
              width: '100%',
              height: '270px',
              backgroundImage:
                'url("https://n.nordstrommedia.com/id/a021b565-1c0b-43f0-800c-fa06b45d1fe1.jpeg?h=417&w=1334")',
              backgroundSize: 'cover',
            }}
          >
            Women
          </Button>
        </Grid>
        <Grid item xs={6} md={4}>
          <Button
            style={{
              color: 'black',
              width: '100%',
              height: '270px',
              fontSize: '50px',
              fontWeight: 'bold',
              backgroundImage:
                'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-1648630488.jpg")',
              backgroundSize: 'cover',
            }}
          >
            Shoes
          </Button>
        </Grid>
        <Grid item xs={6} md={4}>
          <Button
            style={{
              color: 'white',
              width: '100%',
              height: '270px',
              backgroundImage:
                'url("https://image.cnbcfm.com/api/v1/image/106032900-1563825608021rockets.jpg?v=1563825858")',
              backgroundSize: 'cover',
            }}
          >
            Kids
          </Button>
        </Grid>
        <Grid item xs={6} md={4}>
          <Button
            style={{
              color: 'white',
              width: '100%',
              height: '270px',
              backgroundImage:
                'url("https://cache.net-a-porter.com/content/images/story-head-content-1stFebruary2021-1611749733226.jpeg/w1900_q65.jpeg")',
              backgroundSize: 'cover',
            }}
          >
            Other
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
