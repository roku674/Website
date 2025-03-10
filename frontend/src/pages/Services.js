// src/pages/Services.js
import React from 'react';
import { Container, Typography, Box, Link, List, ListItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Internal navigation

const Services = () => {
  return (
    <Container>
      <Box mt={4} className="bubble">
        <Typography variant="h4" gutterBottom>Services</Typography>
        <List>
          {/* Video Games Link (External) */}
          <ListItem>
            <Link href="https://www.perilousgames.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fde047' }}>
              Video Games
            </Link>
          </ListItem>

          {/* Coding Tutoring Link (Internal) */}
          <ListItem>
            <Link component={RouterLink} to="/Contact" style={{ color: '#fde047' }}>
              Coding Tutoring
            </Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Services;
