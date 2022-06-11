import "./App.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import Navbar from "./components/Navbar";
import WhoAmI from "./components/WhoAmI";
import Projects from "./components/Projects";
import About from "./components/About"

const App = () => {
  return (
    <Box>
      <Navbar />
      <WhoAmI />
      <About />
      <Projects />
    </Box>
  );
};

export default App;
