import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Switch, Button, Box } from "@mui/material";
import swimming from "../../assets/aminities.png";
import './AddAminities.css'
import img from "../../assets/image.png";

function AmenitiPop({ openAminitiesDialog, setOpenAminitiesDialog }) {
    console.log('hii');
  const amindata = [
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Feb",
      year: 23,
    },
    {
      name: "Amenities name",
      prices: 20.0,
      startdat: "Feb 22",
      enddate: "12 Feb",
      year: 23,
    },
    {
        name: "Amenities name",
        prices: 20.0,
        startdat: "Feb 22",
        enddate: "12 Feb",
        year: 23,
      },
      {
        name: "Amenities name",
        prices: 20.0,
        startdat: "Feb 22",
        enddate: "12 Feb",
        year: 23,
      },
      {
        name: "Amenities name",
        prices: 20.0,
        startdat: "Feb 22",
        enddate: "12 Feb",
        year: 23,
      },
      {
        name: "Amenities name",
        prices: 20.0,
        startdat: "Feb 22",
        enddate: "12 Feb",
        year: 23,
      },
      {
        name: "Amenities name",
        prices: 20.0,
        startdat: "Feb 22",
        enddate: "12 Feb",
        year: 23,
      },
      {
        name: "Amenities name",
        prices: 20.0,
        startdat: "Feb 22",
        enddate: "12 Feb",
        year: 23,
      },
  ];



  const overlayStyle = {
   
    flexDirection: "column",


    width: "500px",
    height: "500px",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    
  };

  const titleStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderBottom: "1px solid #E4E8EE",
    fontWeight: "700",
  };

  const contentContainerStyle = {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const amenityItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #E4E8EE",
    borderRadius: "6px",
    marginBottom: "8px",
    backgroundColor: "#F9FAFB",
  };

  const amenityInfoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <>


      <Box className="amenitespopocn" sx={{marginTop:'30px'}} onClick={() => setOpenAminitiesDialog(false)}>
      <Box className="pricehed" sx={{ height: "7%", border: "0px",display:'flex',gap:'240px',alignItems:'center',justifyContent:'center' }}>
        <Box sx={{ fontWeight: "700" }}>Add Aminities</Box>
        <Box
          sx={{ color: "#7C8594" }}
          onClick={() => setOpenAminitiesDialog(false)}
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
                <span style={{ fontWeight: "800" }}>05</span> Total Aminities
              </Box>
            </Box>

            <Box className="amubanpri">$ 200.00</Box>
          </Box>

          <Box className="availaamit">Available Aminities</Box>

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
    </>
  );
}

export default AmenitiPop;

