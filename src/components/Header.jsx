import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  MenuItem,
  Tooltip,
  Badge,
  IconButton,
  Menu,
} from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  SearchOutlined,
} from '@mui/icons-material';

import { getUserData, logOut } from '../features/auth/index';

import { useAuthUser } from '../contexts/UserContext';

import { shades } from '../themes/AppThemeProvider';
import { setIsCartOpen } from '../app/state/cartSlice';

import { checkIfUserIsLoggedIn } from '../features/auth/checkIfUserIsLoggedIn';

import { signOutWithFirebaseSDK } from '../firebase/firebaseConfig';
import { handleAsyncAction } from '../handleAsyncAction';

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState('');

  const navigate = useNavigate();
  const onClickAdminPanel = React.useCallback(
    () => navigate('/admin'),
    [navigate],
  );
  const onClickProfile = React.useCallback(
    () => navigate('/profile'),
    [navigate],
  );
  const onClickLogin = React.useCallback(() => navigate('/login'), [navigate]);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const { clearUser, isUserLoggedIn } = useAuthUser();

  React.useEffect(() => {
    handleAsyncAction(async () => {
      const userIsLoggedIn = await checkIfUserIsLoggedIn();
      if (userIsLoggedIn) {
        await getUserData();
      }
    }, 'Loading app...');
    // mount only
  }, [getUserData]);

  const onClickLogOut = React.useCallback(async () => {
    await Promise.all([logOut(), signOutWithFirebaseSDK()]);
    clearUser();
  }, [clearUser]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { isAdmin } = useAuthUser();

  return (
    <Box
      component={Paper}
      elevation={8}
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          color={shades.secondary[500]}
        >
          <Typography variant="h6">Travels</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: 'black' }}>
            <SearchOutlined />
          </IconButton>
          <Tooltip title="Open menu" sx={{ pt: 15 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ color: 'black' }}>
              <PersonOutline />
            </IconButton>
          </Tooltip>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '14px',
                minWidth: '13px',
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: 'black' }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
        </Box>
      </Box>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {isAdmin ? (
          <MenuItem>
            <Typography
              textAlign="center"
              variant="h6"
              onClick={onClickAdminPanel}
            >
              Panel Admin
            </Typography>
          </MenuItem>
        ) : null}
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center" variant="h6" onClick={onClickProfile}>
            Profile
          </Typography>
        </MenuItem>
        <MenuItem>
          {!isUserLoggedIn ? (
            <Typography textAlign="center" variant="h6" onClick={onClickLogin}>
              Login
            </Typography>
          ) : (
            <Typography textAlign="center" variant="h6" onClick={onClickLogOut}>
              Logout
            </Typography>
          )}
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Navbar;
