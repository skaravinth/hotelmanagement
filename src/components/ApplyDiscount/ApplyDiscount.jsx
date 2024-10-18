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
import './ApplyDiscouont.css';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function UnitDialog( {setOpenDialogDialog}) {
    const [open, setOpen] = useState(true);

    // Function to handle dialog close
    const handleClose = () => {
        setOpen(false); // Close the dialog
        setOpenDialogDialog(false); // Notify parent component (if needed)
    };

    return (
        <Dialog  sx={{ '& .MuiDialog-paper': { width: '1000px', maxWidth: '1000px' } }}  open={open} onClose={handleClose}  >
            <DialogTitle>Unit Details</DialogTitle>
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
                    <Box className="mainunit-pricing-details"  sx={{height:'85%'}}>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
    <Typography variant="h6" className="mainunit-pricing-title">Unit Pricing Details</Typography>
    <Box className="mainunit-pricing-list" >
        {[...Array(5)].map((_, index) => (
            <Box key={index} className="mainunit-pricing-itemss" sx={{display:'flex',flexDirection:'column'}}>
                {/* Pricing row with the bill name and amount */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Bill Name Here</span>
                    <span>$1,000</span>
                </Box>

                {/* Discount Section */}
                <Box className="discount-input-section" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Typography variant="caption" sx={{ marginRight: '10px' }}>Discount</Typography>
    <Box sx={{ display: 'flex', gap: '0', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', width: '150px' }}>
        <input
            type="text"
            placeholder='100,000'
            className="discount-input"
        />
        <select className="discount-select">
            <option value="AED">AED</option>
        </select>
    </Box>
</Box>

            </Box>
        ))}
    </Box>

    {/* Final Total Section */}
    <Box
        className="mainunit-pricing-total"
        sx={{ border: '1px solid #ccc', padding: 1, marginTop: '30px', borderRadius: '5px', backgroundColor: '#E4E8EE', display: 'flex', justifyContent: 'space-between' }}
    >
        <Typography variant="body1">Final Total</Typography>
        <Typography variant="h6">$1,200</Typography>
    </Box>
</Box>
<Box sx={{marginTop:'40px',width:'490'}}>
                                <Button variant="contained" color="primary"sx={{width:'480px'}}>
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
