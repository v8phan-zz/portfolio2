import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import cv from "../pdfs/Viet_Phan_resume.pdf";
import Button from "@mui/material/Button";

const About = () => {
  return (
    <Box
      sx={{
        m: 2,
        p: 2,
      }}
    >
      <Paper>
        <Typography
          sx={{
            p: 2,
          }}
        >
          About and skills section here
        </Typography>
        <Button variant="contained">
          <a href={cv} target="_blank" rel="noreferrer" textDecoration="inherit">
            <Typography
              sx={{
                color: "white",
              }}
            >
              Click to see resume
            </Typography>
          </a>
        </Button>
      </Paper>
    </Box>
  );
};

export default About;
