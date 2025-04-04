import React from 'react'
import { Avatar,Box } from '@mui/material'

function Image() {
  return (
    <>
    <Box bgcolor='black' width='100%' justifyItems='center' pt='60px'>
        <Avatar src='/src/assets/กอล์ฟ2.jpg' sx={{
            width:'40%',
            height:'600px',
            borderRadius:5,
        }}
        />
    </Box>
    

    </>
  )
}
export default Image