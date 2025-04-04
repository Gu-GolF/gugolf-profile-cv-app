import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <>
    <AppBar position='static' sx={{bgcolor:'#99ffff'}}>
        <Toolbar>
            <Typography sx={{
                fontSize:'25px',
                flexGrow:'1',
                color:'#191970'
            }}>
                WORACHAI  HOMWANICH
            </Typography>
            <Typography sx={{
                mr:'20px',
                color:'#191970',
            }}>
                Work
            </Typography>
            <Link to='about' smooth={true} duration={500}>
            <Typography sx={{
                mr:'20px',
                cursor:'pointer',
                color:'#191970',
            }}>
                About
            </Typography>
            </Link>
            <Typography sx={{
                color:'#191970',
            }}>
                Contact
            </Typography>
        </Toolbar>

    </AppBar>
    </>
  )
}

export default Navbar