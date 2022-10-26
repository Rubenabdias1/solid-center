import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
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

          <IconButton
            aria-label="cart"
            style={{ color: 'white', marginRight: '1rem' }}
          >
            <Badge color="secondary" badgeContent={0} showZero>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
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
