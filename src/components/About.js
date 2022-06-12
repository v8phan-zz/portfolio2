import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import cv from "../pdfs/Viet_Phan_resume.pdf";

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
        id='abtme'
          sx={{
            p: 2,
          }}
        >
          About and skills section here, maybe a picture What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          established fact that a reader will be distracted by the readable

        </Typography>
        <Button variant="contained">
          <a href={cv} target="_blank" rel="noreferrer">
            <Typography
              sx={{
                color: "white",
                textDecoration: "none",
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
