import React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import blogsample from "../images/blogsample.JPG";
import cocktails from "../images/cocktails.JPG";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Projects = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <CardHeader title="Funky Monkey blog" />
      <CardMedia
        component="img"
        image={blogsample}
        alt="screenshot of excellent website"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Music blog built with React
        </Typography>
      </CardContent>
      <CardActions>
        <ExpandMore expand={expanded} onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Music blog with a front built out of React and a backend built out
            of Node.js and Express. Users are able to create a login and
            password and leave comments on posts. Data is stored in a MySQL
            server. Backend is dockerized and deployed with AWS EC2, frontend is
            deployed on AWS Amplify.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Projects;

// const Projects = () => {
//   return (
//     <Box>
//       <Box
//         component="img"
//         sx={{
//           height: 0.5,
//           width: 0.5,
//           display: "inline-flex",
//         }}
//         alt="blog post and comment section"
//         src={blogsample}
//       />
//       <Box sx={{ display: "inline-flex" }}>Funky Monkey</Box>
//       <Box component="img"
//       sx={{
//         height: .5,
//         width: .5,
//       }}
//       src={cocktails}></Box>
//     </Box>
//   );
// };
