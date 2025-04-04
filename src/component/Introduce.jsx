import React from "react";
import { Grid, Typography, Button, Box, Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Introduce() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          color: "#20B2AA",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          pt="50px"
        >
          <Grid item mr="100px">
            <Typography
              sx={{
                fontSize: "50px",
              }}
            >
              HI,&nbsp;&nbsp;I&nbsp;&nbsp;AM
            </Typography>
            <Typography
              sx={{
                fontSize: "50px",
              }}
            >
              WORACHAI &nbsp;&nbsp;HOMWANICH
            </Typography>
            <Typography
              sx={{
                color: "#20B2AA",
              }}
            >
              นักพัฒนาเว็บไซด์ฝั่งฟรอนท์เอนด์จากประเทศไทย
              ที่มีความหลงใหลในการสร้างเว็บไซด์ให้เข้าใช้งานได้ง่ายเหมาะกับทุกวัย
            </Typography>
            <Box display="flex" mt="20px">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#00bfff",
                  color: "black",
                  mr: "2",
                  borderRadius: 5,
                }}
              >
                Contact Me
              </Button>
              <Avatar
                sx={{
                  mx: 1,
                  bgcolor: "#333333",
                }}
              >
                <a href="https://www.linkedin.com/in/วรชัย-โหมวานิช-3a553635a/">
                  <LinkedInIcon
                    sx={{
                      color: "#00bfff",
                      cursor: "pointer",
                    }}
                  ></LinkedInIcon>
                </a>
              </Avatar>
              <Avatar
                sx={{
                  mx: 1,
                  bgcolor: "#333333",
                }}
              >
                <a href="https://github.com/Gu-GolF">
                  <GitHubIcon
                    sx={{
                      color: "#00bfff",
                      cursor: "pointer",
                    }}
                  ></GitHubIcon>
                </a>
              </Avatar>
            </Box>
          </Grid>

          <Grid item mb="40px">
            <Avatar
              src="/src/assets/กอล์ฟ1.jpg"
              sx={{ width: "400px", height: "500px", borderRadius: 5 }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Introduce;
