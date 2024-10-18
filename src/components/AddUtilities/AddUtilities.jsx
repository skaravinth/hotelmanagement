import React from "react";
import { Box, Button, Switch } from "@mui/material";
import img from "../../assets/image.png";
import CloseIcon from "@mui/icons-material/Close";
import "./AddUtilities.css";
import swimming from '../../assets/icons8-background-remover-50 (1).png'
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
function AmenitiPop({openUtilityDialog, setOpenUtilityDialog}) {
 
  const amindata = [
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
    {
      name: "Utility name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Fed",
      year: 23,
    },
  ];

  return (
    <Box className="amenitespopocn" sx={{marginTop:'30px'}} onClick={() => setOpenUtilityDialog(false)}>
      <Box className="pricehed" sx={{ height: "7%", border: "0px",display:'flex',gap:'240px',alignItems:'center',justifyContent:'center' }}>
        <Box sx={{ fontWeight: "700" }}>Add Utilities</Box>
        <Box
          sx={{ color: "#7C8594" }}
          onClick={() => setOpenUtilityDialog(false)}
        >
          <CloseIcon />
        </Box>
      </Box>

      <Box className="ammunitcon">
        <Box className="amunifon">
          <Box className="amunitbaner" sx={{backgroundColor:'#DBF0F180'}}>
            <Box className="amubancont" >
              <Box className="aligesfs" >
               <img src={swimming} style={{color:'#6DAFB3'}} alt="" />
              </Box>
              <Box style={{ fontWeight: "600" }}>
                <span style={{ fontWeight: "800" }}>05</span> Total Utilities
              </Box>
            </Box>

            <Box className="amubanpri">$ 200.00</Box>
          </Box>

          <Box className="availaamit">Available Utilities</Box>

          <Box className="tooglecon">
            {amindata.map((item, index) => (
              <Box className="tooglecard" key={index}>
                <Box className="toggleimgcon">
                  <img src={img} alt="" />
                </Box>

                <Box className="toogebancont">
                  <Box className="togcontne">{item.name}</Box>
                  <Box
                    className="togcontne"
                    style={{
                      fontSize: "12px",
                      color: "#4E5A6B",
                      fontWeight: "600",
                    }}
                  >
                    <Box>$ {item.prices}</Box>
                    <Box className="dot"></Box>
                    <Box>
                      Valid {item.startdat} - {item.enddate} {item.year}
                    </Box>
                  </Box>
                </Box>

                <Box className="contswitch">
                  <Switch color="success" size="lg" variant="soft" />
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="updatesavcon">
            <Button
              variant="contained"
              sx={{
                width: "100%",
                textTransform: "none",
                backgroundColor: "#5078E1",
              }}
            >
              Update & Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AmenitiPop;