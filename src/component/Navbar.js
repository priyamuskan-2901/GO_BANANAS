import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

// Define the Navbar component
const Navbar = () => (
  // AppBar component for creating the top bar
  <AppBar position="static">
    <Toolbar>
      {/* Typography component for displaying the title */}
      <Typography variant="h6">
        Weather App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
