import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import Button from "@mui/material/Button";
import cv from "../pdfs/Viet_Phan_resume.pdf";

const WhoAmI = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        textAlign: "center",
        pt: 15,
      }}
    >
      <Typography
        variant="h1"
        component="div"
        fontFamily={'Playfair Display'}
        gutterBottom
        sx={{
          
          fontSize: "2.4rem",
          "@media (min-width:600px)": {
            fontSize: "8.0rem",
          },
        }}
      >
        Howdy, I'm Viet
      </Typography>
      <Typography
        variant="h3"
        fontFamily={'Montserrat'}
        gutterBottom
        sx={{
          fontSize: "1.2rem",
          "@media (min-width:600px)": {
            fontSize: "4.0rem",
          },
        }}
      >
        Aspiring full stack developer
      </Typography>
      <Button
          variant="contained"
          sx={{
            m: 4,
          }}
        >
          <Link href={cv} target="_blank" rel="noreferrer">
            <Typography
                    fontFamily={'Open Sans'}
            variant='h6'
              sx={{
                color: "white",
              }}
            >
              VIEW RESUME
            </Typography>
          </Link>
        </Button>
    </Container>
  );
};

export default WhoAmI;
