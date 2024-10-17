import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Avatar, Box, Menu, MenuItem } from '@mui/material';
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import logo from '../../assets/DNT Logo White-04@2x.png'
import Filter from '../Filter/Filter'

const AppBarComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#333',height:'58px' }}>
      <Toolbar>
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src={logo} // Replace this with the logo URL
            alt="Logo"
            style={{ marginRight: 16,width:'115px',height:'22px' }}
          />
          <Typography sx={{fontSize:'10px'}} component="div">
            DYNAMIC NETSOFT | PROPERTY MANAGEMENT SOLUTION
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#444', borderRadius: 1, padding: '0 13px', marginRight: 20 }}>
          <Search sx={{ color: '#fff' ,marginRight:'20px'}} />
          <InputBase
            placeholder="Search"
            sx={{ color: 'inherit', width:'350px',height:'32px' }}
            inputProps={ 'Search' }
          />
        </Box>

        {/* Notification Icon */}
        <IconButton color="inherit" sx={{marginTop:'10px'}}>
          <Filter/>
        </IconButton>

        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center',borderLeft:'2px solid white' }}>
          <Avatar
            alt="Bala Ganesh"
            src="https://via.placeholder.com/40" // Replace this with the avatar URL
            sx={{ marginLeft: 2 }}
          />
          <Box sx={{display:'flex',flexDirection:'column'}}>
          <Typography variant="body1" sx={{ marginLeft: 1,fontSize:'13px' }}>
            Bala Ganesh
          </Typography>
          <Typography variant="body2" sx={{ color: '#aaa', marginLeft: 1 ,fontSize:'13px' }}>
            Super Admin
          </Typography>
          </Box>
         
          <IconButton color="inherit" onClick={handleMenuClick} sx={{marginLeft:'10px'}}>
            <ArrowDropDown />
          </IconButton>
        </Box>

       
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
         
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
