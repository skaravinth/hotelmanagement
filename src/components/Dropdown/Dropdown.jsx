import React, { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';

function DropdownComponent() {
  const [value, setValue] = useState('Casagrand');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        defaultValue='Casagrand'
        
        onChange={handleChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',  // Rounded corners
            backgroundColor: 'white', // White background
            minHeight: '32px',
            minWidth:'166px' // Reduced height of the dropdown
          },
          '& .MuiSvgIcon-root': {
            color: '#3b5998', // Custom color for the arrow icon
          },
          '& .MuiSelect-select': {
            padding: '5px 10px',
            minHeight: '25px',
            minWidth:'166px',
            backgroundColor:'#F5F7FA',
            border:'1px solid #E4E8EE' // Reduced padding inside the select box
          }
        }}
      >
        <MenuItem value="Casagrand" sx={{ minHeight: '30px' }}>Casagrand</MenuItem>
        <MenuItem value="Option 1" sx={{ minHeight: '30px' }}>Option 2</MenuItem>
        <MenuItem value="option 2" sx={{ minHeight: '30px' }}>Option 3</MenuItem>
      </Select>
    </FormControl>
  );
}

export default DropdownComponent;
