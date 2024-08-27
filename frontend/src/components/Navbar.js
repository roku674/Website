// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List className="navbar-drawer">
      <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/bots" onClick={handleDrawerToggle}>
        <ListItemText primary="Bots" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem button component={Link} to="/experience" onClick={handleDrawerToggle}>
        <ListItemText primary="Experience" />
      </ListItem>
      <ListItem button component={Link} to="/projects" onClick={handleDrawerToggle}>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button component={Link} to="/tools" onClick={handleDrawerToggle}>
        <ListItemText primary="Tools" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" component="div" className="navbar-title">
            Alexander Fields
          </Typography>
          <div className="navbar-desktop">
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/bots">Bots</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/experience">Experience</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            <Button color="inherit" component={Link} to="/tools">Tools</Button>
          </div>
          <IconButton 
            color="inherit" 
            edge="end" 
            onClick={handleDrawerToggle} 
            className="navbar-mobile">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="navbar-drawer"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
