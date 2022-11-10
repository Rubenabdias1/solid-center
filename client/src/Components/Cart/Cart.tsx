import Box from '@mui/material/Box';
import styles from './Cart.styles.module.scss';
import { DataGrid, GridColDef, GridRemoveIcon } from '@mui/x-data-grid';
import { useContext, useMemo, useEffect } from 'react';
import { CartContext } from '../../utils/cartContext';
import { mapCartToRows, CartRows } from '../../utils/mapCartToRows';
import { Button, Input } from '@mui/material';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';

export const Cart: React.FC = () => {
  const { cart, removeItem, editQuantity } = useContext(CartContext);

  useEffect(() => {
    document.title = 'Solid Center - Cart';
  }, []);

  const columns: GridColDef[] = [
    {
      field: 'imgURL',
      headerName: 'Image',
      width: 250,
      editable: false,
      renderCell: (params) => {
        const row = params.row as CartRows;
        console.log(params.value);
        return (
          <Link
            to={`/category/${row.data.categoryId}/product/${row.id}`}
            style={{
              height: '200px',
              width: '200px',
              backgroundImage: `url(${(params.value as string) || ''})`,
              display: 'inline-block',
              backgroundSize: 'cover',
            }}
          />
        );
      },
    },
    { field: 'name', headerName: 'Name', width: 130, editable: false },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 130,
      type: 'number',
      renderCell: (params) => (
        <Input
          size="small"
          type="number"
          value={params.value}
          onChange={(e) => {
            const row = params.row as CartRows;
            editQuantity(row.index, parseInt(e.target.value));
          }}
        />
      ),
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 130,
      editable: false,
      valueFormatter: (params) => formatCurrency(params?.value as number),
    },
    {
      field: 'index',
      headerName: '',
      editable: false,
      renderCell: (params) => (
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => {
            removeItem(params.value as number);
          }}
        >
          <GridRemoveIcon />
        </Button>
      ),
    },
  ];

  const rows = useMemo(() => mapCartToRows(cart), [cart]);

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
        onCellEditCommit={(params) => {
          console.log(params);
          // const row = params. as CartRows;
          // editQuantity(row.index, parseInt(params.value as string));
        }}
        className={styles.cartTable}
      />
    </Box>
  );
};
