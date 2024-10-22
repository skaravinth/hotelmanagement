import { React, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Box, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import house from '../../assets/image.png';
import Home from '@mui/icons-material/HomeOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import { FiBook } from "react-icons/fi";
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import './Mainunitdetails.css';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function UnitDialog() {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false); 
    };

    return (
        <Dialog fullWidth maxWidth="md" sx={{ marginTop: '30px' }} onClose={handleClose} open={open}>
            <DialogTitle>Unit Details</DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} className="mainunit-dialog-contentsss">
                
                    <Box className="mainunit-info" flex={1} padding={2}>
                     
                        <Box className='mainunit-img-contain'>
                            <ImageList
                                sx={{ width: '400px', height: 205,borderRadius:'10px' }}
                                variant="quilted"
                                cols={4}
                                rowHeight={100}
                            >
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} style={{ margin: '0px' }}>
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
                        <Typography className="mainunit-titles">Jumeirah Estate</Typography>
                        <Typography  className="mainunit-subtitles">Rubix Apartment, K Tower, Floor 1</Typography>
                        <Box className="mainunit-details">
                            <Box display="flex" alignItems="center" marginBottom={1}>
                                <CircleIcon style={{ height: '10px', width: '10px', marginRight: '5px',color:'#CED3DD' }} />
                                <HotelOutlinedIcon style={{ marginRight: '4px', color: '#CED3DD' }} />
                                <span style={{color:'#4E5A6B',fontWeight:'bold'}}>2</span>
                            </Box>
                            <Box display="flex" alignItems="center" marginBottom={1}>
                                <CircleIcon style={{ height: '10px', width: '10px', marginRight: '5px',color:'#CED3DD' }} />
                                <BathtubOutlinedIcon style={{ marginRight: '4px', color: '#CED3DD' }} />
                                <span  style={{color:'#4E5A6B',fontWeight:'bold'}}>2</span>
                            </Box>
                            <Box display="flex" alignItems="center" marginBottom={1}>
                                <CircleIcon style={{ height: '10px', width: '10px', marginRight: '5px',color:'#CED3DD' }} />
                                <Home style={{ marginRight: '4px', color: '#CED3DD' }} />
                                <span  style={{color:'#4E5A6B',fontWeight:'bold'}}>2BHK</span>
                            </Box>
                            <Box display="flex" alignItems="center" marginBottom={1}>
                                <CircleIcon style={{ height: '10px', width: '10px', marginRight: '5px',color:'#CED3DD' }} />
                                <SelectAllIcon style={{ marginRight: '4px', color: '#CED3DD' }} />
                                <span  style={{color:'#4E5A6B',fontWeight:'bold'}}>2000 Sq.Ft</span>
                            </Box>
                        </Box>
                        <hr />
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7px' }}>
                                <FiBook />Handbook
                            </Box>
                            <Typography sx={{ color: "#5078E1", fontSize: '14px' }}>View/Download</Typography>
                        </Box>
                    </Box>

                    <Box className="mainunit-pricing-details" flex={1} padding={2}height={'100%'}>
                        <Typography variant="h6" className="mainunit-pricing-title">Unit Pricing Details</Typography>
                        <Box className="mainunit-pricing-list">
                            <Box className='mainunit-pricing-names'>
                                {[...Array(5)].map((_, index) => (
                                    <Box key={index} className="mainunit-pricing-item">
                                        <span>Bill Name Here</span>
                                        <span>$1,000</span>
                                    </Box>
                                ))}
                            </Box>
                            <Box className="mainunit-pricing-total" sx={{ border: '1px solid #ccc', padding: 1, marginTop: 22, borderRadius: '5px', backgroundColor: '#E4E8EE' }}>
                                <Typography variant="body1">Final Total</Typography>
                                <Typography variant="h6">$1,200</Typography>
                            </Box>
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
