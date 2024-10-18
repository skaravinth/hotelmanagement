import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pricing = ({ openPricingDialog, setOpenPricingDialog })=> {
    const listofpri = [
        { sno: 1, conte: "Primary", primcolo: "#B3776D", secodcol: "#FEEAEA80" },
        { sno: 2, conte: "Secondary", primcolo: "#896DB3", secodcol: "#EDE4FE80" },
        {
            sno: 3,
            conte: "One Time Charges",
            primcolo: "#6DAFB3",
            secodcol: "#DBF0F180",
        },
        {
            sno: 4,
            conte: "Refundables",
            primcolo: "#6D80B3",
            secodcol: "#E4EDFF80",
        },
        {
            sno: 5,
            conte: "Inventory Item",
            primcolo: "#B3A16D",
            secodcol: "#FFFAD880",
        },
        {
            sno: 6,
            conte: "Parking Slot",
            primcolo: "#B3776D",
            secodcol: "#FEEAEA80",
        },
    ];

    const containerStyle = {
        display: openPricingDialog ? "flex" : "none",
        flexDirection: "column",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: '500px',
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        // zIndex: 10,
    };

    const dialogTitleStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        borderBottom: "1px solid #E4E8EE",
    };

    const pricingContainerStyle = {
        padding: "16px",
        height: '400px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    };

    const pricePopDivStyle = (secodcol) => ({
        width: "100%",
        height: "15%",
        display: "flex",
        borderRadius: "6px",
        backgroundColor: secodcol,
        marginBottom: "8px",
    });

    const priceIntdStyle = {
        width: "50%",
        display: "flex",
        alignItems: "center",
        gap: "7%",
    };

    const pricePopEhdStyle = (primcolo) => ({
        fontSize: "14px",
        fontWeight: "600",
        display: "flex",
        textAlign: "start",
        width: "80%",
        color: primcolo,
        alignItems: "center",
        height: "100%",
    });

    const pricePopCirStyle = {
        width: "15%",
        height: "100%",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
    };

    const pricePopCirSpanStyle = {
        height: "22px",
        width: "22px",
        color: "#ffffff",
        fontSize: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "11px",
    };



    return (
        <Box style={containerStyle}>
            <Box sx={dialogTitleStyle}>
                <span style={{ fontWeight: "700" }}>Pricing Table</span>
                <CloseIcon onClick={() => setOpenPricingDialog(false)} style={{ cursor: 'pointer' }} />
            </Box>
            <Box style={pricingContainerStyle}>
                {listofpri.map((item, index) => (
                    <Box
                        key={index}
                        style={pricePopDivStyle(item.secodcol)}
                        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Box style={priceIntdStyle}>
                            <Box style={pricePopCirStyle}>
                                <span style={{ backgroundColor: item.primcolo, ...pricePopCirSpanStyle }}>
                                    {item.sno}
                                </span>
                            </Box>
                            <Box style={pricePopEhdStyle(item.primcolo)}>
                                {item.conte}
                            </Box>
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "end", width: "50%", alignItems: 'center' }}>
                            <Box>
                                <InfoOutlinedIcon sx={{ color: "#CED3DD", height: '19px', width: '19px', marginRight: '10px' }} />
                            </Box>
                            <Box style={{ width: "15%", display: "flex", justifyContent: "start", alignItems: "center", marginRight: '10px' }}>
                                <ArrowForwardIosIcon sx={{ color: item.primcolo, height: '19px', width: '15px' }} />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Pricing;
