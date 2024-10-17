import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon, Box } from '@mui/material';
import { ChevronRight, Group, Home, AccountCircle, Business, Label, Settings, Cloud, Description, Print, Chat } from '@mui/icons-material';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const menuItems = [
    { icon: <Home />, label: 'Home' },
    { icon: <Group />, label: 'Users' },
    { icon: <AccountCircle />, label: 'Profile' },
    { icon: <Business />, label: 'Business' },
    { icon: <Label />, label: 'Tags' },
    { icon: <Settings />, label: 'Settings' },
    { icon: <Cloud />, label: 'Cloud' },
    { icon: <Description />, label: 'Documents' },
    { icon: <Print />, label: 'Print' },
    { icon: <Chat />, label: 'Chat' },
  ];

  return (
    <Drawer
    variant="permanent"
    anchor="bottom"
    sx={{
      width: 82,
      flexShrink: 0,
      display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      '& .MuiDrawer-paper': {
        width: 82,
        height: '93vh',
        boxSizing: 'border-box',
        backgroundColor: '#333',
        color: '#fff',
      // Ensures the top and bottom items
      },
    }}
  >
    {/* Top icon (ChevronRight) */}
    <Box>
      <List>
        <ListItem button>
          <ListItemIcon>
            <ChevronRight sx={{ color: '#fff' ,marginLeft:'12px'}} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>

   
    <Box sx={{margintop:'40px'}}>
      <List sx={{display:'flex',gap:'10px',flexDirection:'column'}}>
        {menuItems.map((item, index) => (
         <ListItem
         button
         key={index}
         selected={selectedIndex === index}
         onClick={() => handleListItemClick(index)}
         sx={{
           display: 'flex',
           justifyContent: 'center',
          
         }}
       >
         <ListItemIcon
           sx={{
             backgroundColor: selectedIndex === index ? 'blue' : 'transparent', // background color when selected
             width: selectedIndex === index ? '35px' : 'auto', // width 30px when selected
             height: selectedIndex === index ? '35px' : 'auto', // height 30px when selected
             display: 'flex', 
             alignItems: 'center',
             justifyContent: 'center',
             borderRadius: '50%', // circular shape when selected
             color: selectedIndex === index ? '#fff' : 'grey', // white icon when selected, black otherwise
             minWidth: 0, // reduce default padding
             transition: 'background-color 0.3s ease, width 0.3s ease, height 0.3s ease', // smooth transitions
           }}
         >
           {item.icon}
         </ListItemIcon>
       </ListItem>
       
        ))}
      </List>
    </Box>
  </Drawer>
  );
};

export default Sidebar;
