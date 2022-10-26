import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export const CategoryPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '20%' }}>
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
      <Card style={{ flexGrow: 1, padding: '15px' }}>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
        </table>
      </Card>
    </Box>
  );
};
