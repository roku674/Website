// src/pages/Services.js
import React from 'react';
import { Container, Typography, Box, Link, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; 

const Services = () => {
  return (
    <Container>
      <Box mt={4} className="bubble">
        <Typography variant="h4" gutterBottom>Services</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Link href="https://www.perilousgames.com/" target="_blank" rel="noopener noreferrer">
                  Video Games
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Link component={RouterLink} to="/Contact">
                  Coding Tutoring
                </Link>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Services;
