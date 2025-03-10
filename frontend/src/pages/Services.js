// src/pages/Services.js
import React from 'react';
import { Container, Typography, Box, Link, List, ListItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Internal navigation

const Services = () => {
  return (
    <Container maxWidth="md">
      <Box 
        mt={4} 
        className="bubble"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="h4" gutterBottom>Services</Typography>
        <List>
          {/* Video Games Link (External) */}
          <ListItem style={{ display: "flex", justifyContent: "center" }}>
            <Link 
              href="https://www.perilousgames.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#fde047', fontSize: "1.2rem" }}
            >
              Perilous Games
            </Link>
          </ListItem>
		  
		  {/* Website and app building */}
          <ListItem style={{ display: "flex", justifyContent: "center" }}>
            <Link 
              component={RouterLink} 
              to="/Contact" 
              style={{ color: '#fde047', fontSize: "1.2rem" }}
            >
              Website & App Building
            </Link>
          </ListItem>

          {/* Coding Tutoring Link (Internal) */}
          <ListItem style={{ display: "flex", justifyContent: "center" }}>
            <Link 
              component={RouterLink} 
              to="/Contact" 
              style={{ color: '#fde047', fontSize: "1.2rem" }}
            >
              Coding Tutoring
            </Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Services;
