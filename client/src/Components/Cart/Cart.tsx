import Box from '@mui/material/Box';
import styles from './Cart.styles.module.scss';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'imgUrl',
    headerName: 'Image',
    width: 200,
    editable: false,
    renderCell: (params) => (
      <img
        src={params.value}
        style={{ height: '200px', objectFit: 'contain' }}
      />
    ),
  },
  { field: 'name', headerName: 'Name', width: 130, editable: false },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 130,
    type: 'number',
    editable: true,
  },
  { field: 'price', headerName: 'Price', width: 130, editable: false },
];

const rows = [
  {
    id: 1,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 2,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 3,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 4,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 5,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 6,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 7,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 8,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 9,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 10,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 11,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
  {
    id: 12,
    name: 'Coke',
    price: 2.5,
    quantity: 100,
    imgUrl: 'https://images.heb.com/is/image/HEBGrocery/000145352',
  },
];
type CartProps = { on?: () => void };

export const Cart: React.FC<CartProps> = () => {
  return (
    <Box
      style={{
        height: 600,
        width: '70%',
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        rowHeight={204}
        experimentalFeatures={{ newEditingApi: true }}
        className={styles.cartTable}
      />
    </Box>
  );
};
