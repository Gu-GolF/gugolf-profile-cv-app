import React from 'react'
import { Grid,Typography,Button,Box,Avatar} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function AboutMe() {
  return (
    <>
    <Box id='about' bgcolor='black' color='white' pt='60px'>
    <Grid container spacing={2} alignItems='start' justifyContent='center' >

        <Grid item >
            <Typography sx={{
                color:'#20b2aa',
            fontSize:'60px',
            }}>
                ABOUT ME
            </Typography>
          
          
        </Grid>
        
        <Grid item>
            <Box ml='280px'>
        <Box sx={{
            width:'600px',
            height:'200px',
            mt:'20px',
        
           
            
        }}>
        
        <Typography color='#20b2aa'>
        สวัสดีครับ ผมเป็นคนที่สนใจในด้านการพัฒนาเว็บไซต์และการสร้างสรรค์ผลงานบนโลกออนไลน์ ด้วยความชอบในการออกแบบ การแก้ปัญหา และการเรียนรู้สิ่งใหม่ ๆ ทำให้ผมเริ่มต้นเส้นทางสายนี้อย่างจริงจัง
ผมเชื่อว่าเว็บไซต์ไม่ใช่แค่หน้าตา แต่คือประสบการณ์ของผู้ใช้งานที่เราสามารถออกแบบและสร้างขึ้นได้อย่างตั้งใจ ผมจึงมุ่งมั่นที่จะพัฒนาแนวคิดให้กลายเป็นเว็บไซต์ที่ใช้งานได้จริง และสร้างประโยชน์ให้กับผู้ใช้
ตอนนี้ผมกำลังเดินหน้าเรียนรู้และพัฒนาตัวเองในสายงานนี้อย่างต่อเนื่อง และพร้อมจะเติบโตไปกับทุกโอกาสที่เข้ามา
        </Typography>
        <Box height='10px'></Box>
        <Typography color='#009099'>
        ผมมีความฝันอยากจะเป็นนักพัฒนาซอฟแวร์ที่มีหลายๆบริษัทต้องการตัว อยากพัฒนาตัวเองไปเรื่อยๆ สิ่งที่ผมมั่นใจอย่างเดียวก็คงเป็นความพยายามที่จะอยากรู้
        เวลาว่างพักผ่อนสมอง ผมจะชอบเล่นเกม Rov แล้วก็หัวร้อนเพราะค่อยข้างจะจริงจังในการเอาชนะและคิดถึงวิธีการเล่นต่างๆไม่รู้พักผ่อนสมองตรงไหน อิอิ
        </Typography>
        </Box>
        <Box height='80px'></Box>
        <Box  display='flex' mb='20px'>
            <Button variant='contained' sx={{
                borderRadius:5,
                bgcolor:'#00bfff',
                color:'black'
            }}>
            DOWLOAD RESUME
            </Button>
            <Avatar sx={{
                mx:1,
                bgcolor:'#333333'
            }}>
                <a href="https://www.linkedin.com/in/วรชัย-โหมวานิช-3a553635a/">
                <LinkedInIcon sx={{
                    color:'#00bfff',
                     cursor:'pointer'
                }}></LinkedInIcon>
                </a>
            </Avatar>
            <Avatar
            sx={{
                bgcolor:'#333333'
            }}>

                <a href="https://github.com/Gu-GolF">
                <GitHubIcon sx={{
                    color:'#00bfff',
                     cursor:'pointer'
                }}></GitHubIcon>
                </a>
            </Avatar>
        </Box>
       </Box>
        </Grid>
        

    </Grid>
    
    </Box>
    </>
  )
}

export default AboutMe