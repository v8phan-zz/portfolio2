import "./App.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import Navbar from "./components/Navbar";
import WhoAmI from "./components/WhoAmI";
import Projects from "./components/Projects";
import About from "./components/About";
import ToTop from "./components/ToTop";


const App = () => {
  return (
    <Box>
      <Navbar />
      <WhoAmI />
      <About />
      <Projects />
      {/* <ToTop /> */}
    </Box>
  );
};

export default App;
