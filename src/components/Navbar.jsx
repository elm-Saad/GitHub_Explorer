import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#24292e' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <GitHubIcon style={{ color: '#ffffff' }} fontSize='large'/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
