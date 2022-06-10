import React from "react";
import Box from "@mui/material/Box";
import blogsample from "../images/blogsample.JPG";

const Projects = () => {
  return (
    <Box>
      <Box
        component="img"
        sx={{
          height: 0.5,
          width: 0.5,
          display: "inline-flex",
        }}
        alt="blog post and comment section"
        src={blogsample}
      />
      <Box sx={{ display: "inline-flex" }}>Funky Monkey</Box>
    </Box>
  );
};

export default Projects;
