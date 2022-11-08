import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../utils/cartContext';

export const NavBar = () => {
  const cartContext = useContext(CartContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ all: 'unset', cursor: 'pointer', flexGrow: 1 }}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              SOLID CENTER
            </Typography>
          </Link>
          <Link to="/cart">
            <Badge
              color="secondary"
              badgeContent={cartContext.cart.length}
              showZero
              style={{ color: 'white', marginRight: '1rem' }}
            >
              <ShoppingCartIcon />
            </Badge>
          </Link>
          <IconButton sx={{ p: 0 }}>
            <Avatar
              alt="Ruben Nunez"
              src="https://avatars.githubusercontent.com/u/37821608?v=4"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
