import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Typography>Viet Phan</Typography>
      </Container>
    </AppBar>
  );
};

export default Navbar;
