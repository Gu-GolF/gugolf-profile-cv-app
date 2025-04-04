import React from 'react'
import { Grid,Typography,Box, colors} from '@mui/material'
import TechBoxComponent from './TechBoxComponent'
function Capabilities() {
  return (
   <>
   <Box bgcolor='black' color='white' pt='60px'>
    <Grid container spacing={2} alignItems='start' justifyContent='center'>
        <Grid item pr='60px'>
            <Typography sx={{
                fontSize:'60px',
                color:'#20b2aa'
            }}>
                MY CAPABILITIES
            </Typography>
        </Grid>
        <Grid item>
            <Box sx={{
                width:'600px',
                height:'300px',
                pt:"20px",
               
            }}>
                <Typography sx={{
                    color:'#20b2aa'
                }}>
                ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆอยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล
                </Typography>
                
                <Box bgcolor='black' display='flex' mt='20px' sx={{
                   width: '100%',
                   flexWrap: 'wrap', 
                   gap:'10px',
              
    
                }}>
                    <TechBoxComponent text={'HTML'}/>
                    <TechBoxComponent text={'CSS'}/>
                    <TechBoxComponent text={'JAVASCRIPT'}/>
                    <TechBoxComponent text={'REACT'}/>
                    <TechBoxComponent text={'FLUTTER'}/>
                    <TechBoxComponent text={'JAVA'}/>
                    <TechBoxComponent text={'GO'}/>
                    <TechBoxComponent text={'NODEJS'}/>
                    <TechBoxComponent text={'MYSQL'}/>  
                    <TechBoxComponent text={'POSTGRESSQL'}/>  
                </Box>
            </Box>
           
        </Grid>
    </Grid>
   </Box>
   </>
  )
}

export default Capabilities