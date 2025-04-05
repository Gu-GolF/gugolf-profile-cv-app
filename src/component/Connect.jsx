import React from 'react'
import { Typography,Button,TextField,Box,Grid } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Connect() {
  return (
    <>
    <Box id="connect" bgcolor='black' pt='60px' color='white' pb='150px'>
    <Grid container spacing={2} alignItems='start' justifyContent='center'>
        <Grid item pr='60px'>
           <Box sx={{
            height:'530px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between'
           
            
           }}>
            <Box>
            <Typography sx={{
                fontSize:'60px',
                color:'#20b2aa'
            }}>
                LET'S CONNECT
            </Typography>
            <Typography my="10px" color='#33ffff'>
                Email : S6552C10031@sau.ac.th
            </Typography>
            <Typography color='#33ffff'>
                Phone : 091-785-9898
            </Typography>
            <Box sx={{
                display:'flex',
                mt:'20px'
            }}>
                < a href="https://www.linkedin.com/in/วรชัย-โหมวานิช-3a553635a/">
                <LinkedInIcon sx={{
                    mr:1,
                    fontSize:'50px',
                    color:'#00bfff',
                    cursor:'pointer'
                }}></LinkedInIcon>
                </a>
              
              < a href="https://github.com/Gu-GolF">
                <GitHubIcon sx={{
                    mx:1,
                     fontSize:'50px',
                     color:'#00bfff',
                     cursor:'pointer'
                }}></GitHubIcon>
                </a>
                <a href="https://www.instagram.com/worachaigugolf/">
                <InstagramIcon sx={{
                    mx:1,
                     fontSize:'50px',
                     color:'#00bfff',
                     cursor:'pointer'
                }}></InstagramIcon>
                </a>
                <a href="https://www.facebook.com/worachai.gugolf/">
                <FacebookIcon sx={{
                    mx:1,
                     fontSize:'50px',
                     color:'#00bfff',
                     cursor:'pointer'
                }}></FacebookIcon>
                </a>
               </Box>
            </Box>
           <Typography color='#33ffff'>
            © WORACHAI &nbsp;&nbsp;HOMWANICH
           </Typography>
           </Box>
        </Grid>
        <Grid>
            <Box sx={{
                width:'600px',
            
                pt:'20px',
                pl:'30px'
            }}>
                <Typography color='#20b2aa'>
                    Name
                </Typography>
                <TextField size='small' fullWidth sx={{
                    bgcolor:'grey',
                    
                }}></TextField>
                <Box height='20px'></Box>
                <Typography color='#20b2aa'>
                    Email
                </Typography>
                <TextField size='small' type='email' fullWidth sx={{
                    bgcolor:'grey',
                    
                }}></TextField>
                <Box height='20px'></Box>
                <Typography color='#20b2aa'>
                    Subject
                </Typography>
                <TextField size='small' fullWidth sx={{
                    bgcolor:'grey',
                    
                }}></TextField>
                <Box height='20px'></Box>
                <Typography color='#20b2aa'>
                    Message
                </Typography>
                <TextField size='large' multiline rows={5} fullWidth sx={{
                    bgcolor:'grey',
                    
                  
                    
                }}></TextField>
                 <Box height='30px'></Box>
                 <Button variant='contained' sx={{
                    bgcolor: '#00bfff',
                    color:'black',
                    borderRadius:10,
                    width:'120px',
                    height:'60px'
                 }}>SUBMIT</Button>
               
            </Box>
        </Grid>
    </Grid>
    </Box>
    </>
  )
}

export default Connect