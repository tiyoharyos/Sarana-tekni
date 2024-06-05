import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="logo">
        <img src="/logo.png" alt="PT. Sarana Teknik" style={{ height: 40 }} />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        PT. Sarana Teknik
      </Typography>
      <Button color="inherit" component={Link} to="/">
        <HomeIcon />
        Home
      </Button>
      <Button color="inherit" component={Link} to="/dashboard">
        <DashboardIcon />
        Dashboard
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
