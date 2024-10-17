import React from 'react';
import {    BiBell } from "react-icons/bi";
import { Badge, Box } from '@mui/material';
const Filter = () => {
  return (
    <div style={{height:'40px',width:'40px'}}>
    <Badge
  color="primary"
  variant="dot"
  overlap="circular"
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  sx={{
    '.MuiBadge-dot': {
      backgroundColor: 'blue',  
      width: '8px',
      height: '8px',
      borderRadius:'50%',
      border:'1px solid white'
    },
  }}
>
  <Box
    sx={{
      position: 'relative',
      display: 'inline-flex',
     
      
        
    }}
  >
    <BiBell style={{ width: '26px', height: '26px', color: 'white' }} />
  </Box>
</Badge>
  
</div>
  );
}

export default Filter;