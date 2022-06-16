import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, CardActionArea, CardActions } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import blogsample from "../images/blogsample.JPG";
import cocktails from "../images/cocktails.JPG";
import hittable from "../images/hittable.JPG";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Projects = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      divider={
        <Divider orientation={{ xs: "horizontal", sm: "vertical" }} flexItem />
      }
      sx={{ m: 2, "@media (min-width:600px)": { m: 4 } }}
    >
      <Card
        id="projects"
        sx={{
          maxWidth: 1,
          "@media (min-width:600px)": {
            maxWidth: 0.3,
          },
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={blogsample} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              The Funky Monkey
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Music blog with a front built out of React and a backend built out
              of Node.js and Express. Users are able to create a login and
              password and leave comments on posts. Data is stored in a MySQL
              server. Backend is dockerized and deployed with AWS EC2, frontend
              is deployed on AWS Amplify.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            href="https://github.com/v8phan/monfront-amplify"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{
          maxWidth: 1,
          "@media (min-width:600px)": {
            maxWidth: 0.3,
          },
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={cocktails} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cocktails
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Website built with React. Pulls from a cocktails API and displays
              the data in a pleasing and interactive way. Hovering on a card
              flips it to show more information. Information can be sorted
              alphabetically or searched.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            href="https://github.com/v8phan/cocktails"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </Button>
        </CardActions>
      </Card>

      <Card
        sx={{
          maxWidth: 1,
          "@media (min-width:600px)": {
            maxWidth: 0.3,
          },
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={hittable} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hittable
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Reads user location automatically or takes manual input and sends
              an axios call to a weather API. The data is run through a simple
              algorithm to determine whether the weather is favorable for
              enjoying tennis.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            href="https://github.com/v8phan/hittable"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default Projects;
