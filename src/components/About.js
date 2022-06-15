import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import self from "../images/self.jpg";
import cv from "../pdfs/Viet_Phan_resume.pdf";

const About = () => {
  return (
    <Box
      display=""
      sx={{
        m: 2,
        "@media (min-width:600px)": {
          m: 4,
        },
      }}
    >
      <Paper>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Typography
            id="abtme"
            sx={{
              p: 2,
              alignItems: 'center',
            }}
          >
            My name is Viet Phan, a graduate of the University of Texas based in
            Austin, Texas. I am a self taught programmer trying to learn as much
            as I possibly can. I have created projects with the React framework
            and am able to utilize APIs and work with backend technologies such
            as Node Express and have created and used databases with SQL. My
            objective is simply to be the most knowledgable and well rounded
            developer that I can be. I read a lot and I got the best Feng in
            Austin.
          </Typography>


          <Box
            component="img"
            alt="handsome guy"
            src={self}
            sx={{ 
              maxWidth: 0.4,
              p: 4,
              "@media (max-width:600px)":{
                maxWidth: 1,
                p: 4
              }
             }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            m: 4,
          }}
        >
          <a href={cv} target="_blank" rel="noreferrer">
            <Typography
              sx={{
                color: "white",
                textDecoration: "none",
              }}
            >
              RESUME
            </Typography>
          </a>
        </Button>
      </Paper>
    </Box>
  );
};

export default About;
