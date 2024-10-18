import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2'; // Import Grid correctly
import Typography from '@mui/material/Typography'; // Import Typography correctly
import Sidebar from '../components/Sidebar';
import AppBar from '../components/Appbar/Appbar';
import { Box ,Button} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdKeyboardArrowLeft } from "react-icons/md";
import Dropdown from '../components/Dropdown/Dropdown'
import Leaddetails from '../components/LeadDetails/Leaddetails'
import Unitdetails from '../components/UnitDetails/Unitdetails';
import Quantity from '../components/QuantityDetails/Qutationdetails';


function Home() {
 
  return (
    <div>
      <Grid container sx={{height:"100vh",width:"100%"}}>
        <Grid  color="white" sx={{height:"7.5%",width:"100%"}}>
            <AppBar />
        </Grid>
        <Grid item color="grey" sx={{height:"93%",width:"100%",display:"flex"}}>
            <Grid sx={{display:'flex',flexGrow:5}}>
                <Sidebar/>
            </Grid>
            <Grid item size={{md:11.35}}>
              <Box sx={{height:'7%',display:'flex',justifyContent:'space-between'}}>
              <Grid  sx={{height:"7%",paddingX:"30px"}}> <Box sx={{marginTop:'15px'}}><Box sx={{display:'flex'}}><Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'24px',width:'24px',backgroundColor:'#E4E8EE',borderRadius:'50%'}}><MdKeyboardArrowLeft /></Box> <span style={{fontSize:'18px',fontWeight:'bold',color:'black',marginLeft:'12px'}}>Create Quotation to Existing Lead</span></Box></Box>  </Grid>
              <Box sx={{marginTop:'10px',marginRight:'2%'}}><Dropdown/></Box>
                
              </Box>
                <Box  bgcolor="#F5F7FA" sx={{padding:"1%",height:"84%",border:'0 0 5px 5px'}}>
                  <Box bgcolor="#F5F7FA" sx={{margin:"1%",width:"98%",height:"100%",border:'0 0 5px 5px'}}>
                  <Box  bgcolor="#ffffff" sx={{width:"98.61%",height:"10%",display:'flex',borderRadius:'5px 5px 0 0',color:'#5078E1',justifyContent:'start',alignItems:'center',paddingLeft:'20px',fontSize:'14px'}}>
                    Add Contact &gt; Lead Details &gt; Preview and Create Lead &gt; Quantity Details &gt;<Box sx={{backgroundColor:'blue',display:'flex',justifyContent:'center',alignItems:'center',height:'20px',width:'20px',borderRadius:'50%',color:'white',marginLeft:'3px',marginRight:'3px'}}>4</Box>Preview and Create
                  </Box>
                  <Box bgcolor="white" sx={{width:'90.7%',position:'absolute',marginTop:'485px',zIndex:'1000',height:'90px',display:'flex',flexDirection:'row',justifyContent:'space-between',border:'0 0 5px 5px'}}>
                    <Box sx={{marginLeft:'20px'}}><Button sx={{height:'40px',width:'100px',border:'1px solid #E4E8EE',marginTop:'15px'}}>Previous</Button></Box>
                    <Box sx={{marginTop:'20px',display:'flex',gap:'20px'}}>
                      <Button sx={{height:'40px',width:'75px',border:'1px solid #E4E8EE'}}>Back</Button>
                      <Button sx={{height:'40px',width:'143px',backgroundColor:'blue',color:'white',fontSize:'12px',marginRight:'20px'}}>Create Question</Button>
                    </Box>
                  </Box>
                  <Box sx={{width:"100%",height:"90%",display:"flex"}}>
                    <Box bgcolor="#ffffff" sx={{height:"100%",width:"30%"}}><Leaddetails/></Box>
                    <Box bgcolor="#f6f8fa" sx={{height:"100%",width:"40%"}} ><Unitdetails /></Box>
                    
                    <Box bgcolor="#ffffff" sx={{height:"100%",width:"30%",padding:'16px'}}> <Box marginBottom={'20px'}>  <Typography>Quatation</Typography></Box><Quantity/></Box>                    
                   
                  </Box>
                  
                  </Box>
                </Box>
                {/* <Grid container bgcolor="red" boxShadow="0px 0px 16px #00000014" sx={{height:"93%",margin:"2%"}}>
                    <Grid item bgcolor="#FFFFFF" sx={{height:"9%",width:"80%",borderTopRightRadius:"12px",borderTopLeftRadius:"12px"}}>sget</Grid>
                    <Grid item sx={{height:"76%"}}> */}
                      {/* <Grid item sx={{height:"100%",width:"30%"}}>lead details</Grid>
                      <Grid item sx={{height:"100%",width:"404%"}}>unit details</Grid>
                      <Grid item sx={{height:"100%",width:"30%"}}>quotation summary</Grid> */}
                    {/* </Grid>
                    <Grid item bgcolor="#FFFFFF" sx={{height:"13%",width:"80%",borderBottomLeftRadius:"12px",borderBottomRightRadius:"12px"}}>
                      hello
                    </Grid>
                </Grid> */}

            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
