import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import self from "../images/self.jpg";
import cv from "../pdfs/Viet_Phan_resume.pdf";

const About = () => {
  const skills = [
    "React",
    "Javascript",
    "Express",
    "Node",
    "Tekken",
    "Docker",
    "Git",
    "GitHub",
    "AWS",
    "SQL",
    "HTML",
    "CSS",
    "Heroku",
  ];

  return (
    <Container sx={{ mb: 15 }} id="abtme">
      <Typography variant="h3" align="center" fontFamily={"Abhaya Libre"}>
        About me
      </Typography>

      <Grid container spacing={0}>
        {/* avatar */}
        <Grid item xs={12} md={5} sx={{ mb: 1 }}>
          <Box
            component="img"
            alt="handsome guy"
            src={self}
            sx={{
              maxWidth: 0.7,
              m: 4,
              "@media (min-width:600px)": {
                maxWidth: 0.5,
              },
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          flexDirection="column"
          alignItems="center"
          display="flex"
          justifyContent="center"
        >
          <Box>
            <Typography
              fontFamily={"Open Sans"}
              fontSize="20px"
              sx={{
                m: 4,
                "@media (min-width:600px)": {
                  mr: 8,
                },
              }}
            >
              My name is Viet Phan, and I'm self taught programmer based in
              Austin, Texas. I am a voracious learner and every day I try to
              stuff my brain with as much as I possibly can. I've created
              projects using frontend technologies such as the React framework
              and have also worked with APIs and other backend technologies such
              as Node/Express including creating and interacting with databases
              via SQL. My objective is simply to be the most knowledgable and
              well rounded developer that I can be. When not programming, I
              enjoy tennis and reading and fighting games.
            </Typography>
          </Box>

          <Container sx={{ display: "flex", flexWrap: "wrap" }}>
            {skills.map((skill) => (
              <Grid>
                <Paper
                  elevation={10}
                  sx={{
                    marginRight: "10px",
                    marginBottom: "10px",
                    padding: "13px",
                    "&:hover": {
                      backgroundColor: "lightblue",
                    },
                  }}
                >
                  <Typography align="center" sx={{}}>
                    {skill}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

// const About = () => {
//   return (
//     <Box
//       display=""
//       sx={{
//         m: 2,
//         "@media (min-width:600px)": {
//           m: 4,
//         },
//       }}
//     >
//       <Paper>
//         <Box
//           sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
//         >
//           <Typography
//             id="abtme"
//             sx={{
//               p: 4,
//               alignItems: "center",
//             }}
//           >
//             My name is Viet Phan, a graduate of the University of Texas based in
//             Austin, Texas. I am a self taught programmer trying to learn as much
//             as I possibly can. I have created projects with the React framework
//             and am able to utilize APIs and work with backend technologies such
//             as Node Express and have created and used databases with SQL. My
//             objective is simply to be the most knowledgable and well rounded
//             developer that I can be. I read a lot and I got the best Feng in
//             Austin.
//           </Typography>

//           {/* list of skills here */}
//           <Box>
//             <List display="flex">
//               <ListItem display="flex" position="relative">
//                 <ListItemText>React</ListItemText>
//               </ListItem>
//               <ListItem display="flex" position="relative">
//                 <ListItemText >Express.js</ListItemText>
//               </ListItem>
//               <ListItem display="flex" position="relative">
//                 <ListItemText >Node.js</ListItemText>
//               </ListItem>
//               <ListItem display="flex" position="relative">
//                 <ListItemText >Tekken</ListItemText>
//               </ListItem>
//             </List>
//           </Box>

//           {/* picture of handsome guy */}
//   <Box
//     component="img"
//     alt="handsome guy"
//     src={self}
//     sx={{
//       maxWidth: .3,
//       "@media (max-width:600px)": {
//         maxWidth: 1,
//         p: 4,
//       },
//     }}
//   />
// </Box>
// <Button
//   variant="contained"
//   sx={{
//     m: 4,
//   }}
// >
//   <a href={cv} target="_blank" rel="noreferrer">
//     <Typography
//       sx={{
//         color: "white",
//         textDecoration: "none",
//       }}
//     >
//       RESUME
//     </Typography>
//   </a>
// </Button>
//       </Paper>
//     </Box>
//   );
// };

export default About;
