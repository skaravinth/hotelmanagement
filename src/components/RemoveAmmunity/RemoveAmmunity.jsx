import { React, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Box, Typography,Button } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import house from '../../assets/image.png';
import Home from '@mui/icons-material/HomeOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import { FiBook } from "react-icons/fi";
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import './RemoveAmmnity.css';
import { HiOutlineTrash } from "react-icons/hi";


function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function UnitDialog() {
    const [open, setOpen] = useState(true);
    const [pricingItems, setPricingItems] = useState([
        { id: 1, name: 'Billing Name here', price: '$1,000' },
        { id: 2, name: 'Billing Name here', price: '$1,000' },
        { id: 3, name: 'Billing Name here', price: '$1,000' },
        { id: 4, name: 'Amminity Name here', price: '$1,000' },
        { id: 5, name: 'Amminity Name here', price: '$1,000' }
    ]);

    // Function to handle dialog close
    const handleClose = () => {
        setOpen(false); // Close the dialog
    };

    // Function to handle item deletion
    const handleDelete = (id) => {
        const updatedItems = pricingItems.filter(item => item.id !== id);
        setPricingItems(updatedItems);
    };

    return (
        <Dialog fullWidth maxWidth="md" sx={{ marginTop: '30px' }} onClose={handleClose} open={open}>
            <DialogTitle>Remove Components</DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} className="mainunit-dialog-content">
                    {/* Left Side - Image and Unit Info */}
                    <Box className="mainunit-info" flex={1} padding={2}>
                        {/* Image List */}
                        <Box className='mainunit-img-contain'>
                            <ImageList
                                sx={{ width: '400px', height: 205 }}
                                variant="quilted"
                                cols={4}
                                rowHeight={100}
                            >
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                        <img
                                            {...srcset(item.img, 100, item.rows, item.cols)}
                                            alt={item.title}
                                            loading="lazy"
                                            className='mainunit-img'
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                        <Typography className="mainunit-title">Jumeirah Estate</Typography>
                        <Typography variant="body1" className="mainunit-subtitle">Rubix Apartment, K Tower, Floor 1</Typography>
                        <Box className="mainunit-details">
                            <Box display="flex" alignItems="center" marginBottom={1}>
                                <CircleIcon style={{ height: '10px', width: '10px', marginRight: '5px' }} />
                                <HotelOutlinedIcon style={{ marginRight: '4px', color: 'black' }} />
                                <span>2</span>
                            </Box>
                            <Box display="flex" alignItems="center" marginBottom={1}>
                                <CircleIcon style={{ height: '10px', width: '10px', marginRight: '5px' }} />
                                <BathtubOutlinedIcon style={{ marginRight: '4px', color: 'black' }} />
                                <span>2</span>
                            </Box>
                            <Box display="flex" alignItems="center" marginBottom={1}>
                                <CircleIcon style={{ height: '10px', width: '10px', marginRight: '5px' }} />
                                <Home style={{ marginRight: '4px', color: 'black' }} />
                                <span>2BHK</span>
                            </Box>
                            <Box display="flex" alignItems="center" marginBottom={1}>
                                <CircleIcon style={{ height: '10px', width: '10px', marginRight: '5px' }} />
                                <SelectAllIcon style={{ marginRight: '4px', color: 'black' }} />
                                <span>2000 Sq.Ft</span>
                            </Box>
                        </Box>
                        <hr />
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7px' }}>
                                <FiBook />Handbook
                            </Box>
                            <Typography sx={{ color: "#5078E1", fontSize: '14px' }}>View/Download Handbook</Typography>
                        </Box>
                    </Box>

                    {/* Right Side - Pricing Details */}
                    <Box className="mainunit-pricing-details" flex={1} padding={2} sx={{height:'75%',display:'flex',flexDirection:'column',gap:'20px',width:'380px'}}>
                    <Box >
                        <Typography variant="h6" className="mainunit-pricing-title">Unit Pricing Details</Typography>
                        <Box className="mainunit-pricing-list">
                            <Box sx={{height:'350px'}}>
                            <Box className='mainunit-pricing-names'>
                                {pricingItems.map((item) => (
                                    <Box key={item.id} className="mainunit-pricing-item" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>{item.name}</span>
                                        <Box sx={{ display: 'flex', alignItems: 'center',gap:'9px' }}>
                                            <span>{item.price}</span>
                                            <Box 
  sx={{
    height: '26px', 
    width: '26px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    border: '1px solid red', 
    backgroundColor: '#ffb3b3',
    borderRadius:'5px'
  }}
>
  <HiOutlineTrash 
    style={{ cursor: 'pointer', color: 'red' }} 
    onClick={() => handleDelete(item.id)} 
  />
</Box>

                                           
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                            </Box>
                            <Box 
  className="mainunit-pricing-total" 
  sx={{ 
    border: '1px solid #ccc', 
    padding: 1, 
    
    borderRadius: '5px', 
    backgroundColor: '#E4E8EE',
       // Sticky positioning
               // Sticks to the bottom of the container when scrolling
              // Ensures it remains on top
  }}
>
    <Typography variant="body1">Final Total</Typography>
    <Typography variant="h6">$1,200</Typography>
</Box>

                        </Box>
                           
                    </Box>
                    <Box sx={{}}>
                                <Button variant="contained" color="primary"sx={{width:'400px'}}>
                                Update & Save
                                </Button>
                            
                            </Box>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

const itemData = [
    {
        img: house,
        title: 'House Front',
        rows: 2,
        cols: 2,
    },
    {
        img: house,
        title: 'Living Room',
    },
    {
        img: house,
        title: 'Dining Area',
    },
    {
        img: house,
        title: 'Backyard',
        cols: 1,
    },
    {
        img: house,
        title: 'More Details',
        cols: 1,
    }
];
