import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '2.4rem',
  '@media (min-width:600px)': {
    fontSize: '8.0rem',
  }
};

theme.typography.h3 = {
  fontSize: '1.4rem',
  '@media (min-width:600px)': {
    fontSize: '4.0rem',
  }
};

const WhoAmI = () => {
  return (
    <Box
      sx={{
        p: 2,
        width: 1,
        height: 1,
        maxWidth: "fit-content",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          p: 2,
          m: 2,
        }}
      >
        <ThemeProvider theme={theme}>
        <Typography variant="h1" component="div" gutterBottom>
          Howdy, I'm Viet
        </Typography>
        <Typography variant="h3" gutterBottom>
          Aspiring full stack developer
        </Typography>
        </ThemeProvider>

      </Paper>
    </Box>
  );
};

export default WhoAmI;
