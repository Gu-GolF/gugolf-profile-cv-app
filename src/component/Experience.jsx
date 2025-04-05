import React from "react";
import { Box, Typography, Grid } from "@mui/material";

function Experience() {
  return (
    <>
      <Box id="experience" bgcolor="black" color="white" pt="60px">
        <Grid container spacing={2} alignItems="start" justifyContent="center">
          <Grid item pr="60px">
            <Typography
              sx={{
                fontSize: "60px",
                color: "#20b2aa",
              }}
            >
              MY EXPERIENCE
            </Typography>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: "600px",
                height: "100px",
                pt: "20px",
                pl: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    color: "#20b2aa",
                  }}
                >
                  Freelance Project — ร้านค้าออนไลน์ “ปังปุริเย่เบเกอรี่”
                </Typography>
                <Typography sx={{ color: "#20b2aa" }}>
                  Jan 2024 – Feb 2024
                </Typography>
              </Box>
              <Box height="20px"></Box>
              <Typography
                sx={{
                  color: "#20b2aa",
                }}
              >
                สร้างเว็บไซต์ขายขนมด้วย Next.js และ Tailwind CSS
                เชื่อมต่อระบบชำระเงินผ่าน Line Pay
                มีระบบหลังบ้านให้เจ้าของร้านจัดการสินค้าและออเดอร์
              </Typography>
            </Box>
            <Box
              sx={{
                width: "600px",
                height: "100px",
                pt: "20px",
                pl: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    color: "#20b2aa",
                  }}
                >
                  Mobile Dev — Flutter Mini Project “FitDaily”
                </Typography>
                <Typography sx={{ color: "#20b2aa" }}>
                  Nov 2023 – Dec 2023
                </Typography>
              </Box>
              <Box height="20px"></Box>
              <Typography
                sx={{
                  color: "#20b2aa",
                }}
              >
                พัฒนาแอปออกกำลังกายที่มีระบบนับเวลาและเตือนวันฝึก ใช้ Firebase
                Auth และ Firestore บันทึกโปรไฟล์ผู้ใช้งาน ฝึกใช้ Dart
                และเรียนรู้การจัดการสถานะด้วย Provider
              </Typography>
            </Box>
            <Box
              sx={{
                width: "600px",
                height: "200px",
                pt: "20px",
                pl: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    color: "#20b2aa",
                  }}
                >
                  Frontend Developer Intern — CodeCrafter Studio
                </Typography>
                <Typography sx={{ color: "#20b2aa" }}>
                  July 2023 – Oct 2023
                </Typography>
              </Box>
              <Box height="20px"></Box>
              <Typography
                sx={{
                  color: "#20b2aa",
                }}
              >
                พัฒนาเว็บ Landing Page ด้วย React และ Material UIออกแบบ UI/UX
                ให้เหมาะกับทุกขนาดหน้าจอ (Responsive Design)ใช้ Git และ GitHub
                ทำงานร่วมกับทีมแบบ Agile
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Experience;
