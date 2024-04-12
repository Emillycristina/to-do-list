//import  { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';


const Navbar = () => {
  

  const user = {
    name: 'User',
    //avatar: 'https://example.com/avatar.jpg',
  };

  return (
   
      <AppBar position="static" color="info">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar /* src={user.avatar} */ alt={user.name} sx={{ marginRight: '8px' }} />
            <Typography variant="body1">{user.name}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    
  );
};

export default Navbar;
