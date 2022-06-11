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
import hittable from "../images/hittable.JPG";

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
  //expand state for funky monkey
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //expand state for cocktails
  const [expanded2, setExpanded2] = React.useState(false);
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  //expand state for hittable
  const [expanded3, setExpanded3] = React.useState(false);
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  return (
    <Box>
      <Card>
        <CardHeader title="Funky Monkey Blog" />
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
              server. Backend is dockerized and deployed with AWS EC2, frontend
              is deployed on AWS Amplify.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card>
        <CardHeader title="Cocktails" />
        <CardMedia
          component="img"
          image={cocktails}
          alt="screenshot of excellent website"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Displays information about cocktails
          </Typography>
        </CardContent>
        <CardActions>
          <ExpandMore expand={expanded2} onClick={handleExpandClick2}>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded2} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Website built with React. Pulls from a cocktails API and displays
              the data in a pleasing and interactive way. Hovering on a card
              flips it to show more information. Information can be sorted
              alphabetically or searched.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card>
        <CardHeader title="Hittable" />
        <CardMedia
          component="img"
          image={hittable}
          alt="screenshot of excellent website"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Reads user location and determines if playing tennis is possible
          </Typography>
        </CardContent>
        <CardActions>
          <ExpandMore expand={expanded3} onClick={handleExpandClick3}>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded3} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Reads user location automatically or takes manual input and sends
              an axios call to a weather API. The data is run through a simple
              algorithm to determine whether the weather is favorable for
              enjoying tennis.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
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
