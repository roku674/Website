// src/pages/Contact.js
import React from 'react';
import { Container, Typography, Box, Link, List, ListItem, ListItemText } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Contact Me</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Email: roku674@gmail.com" />
          </ListItem>
          <ListItem>
            <ListItemText primary="LinkedIn: " />
            <Link href="https://www.linkedin.com/in/alexander-a-fields" target="_blank" rel="noopener noreferrer">
              Alexander Fields
            </Link>
          </ListItem>
          <ListItem>
            <ListItemText primary="GitHub: " />
            <Link href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              github.com
            </Link>
          </ListItem>
          <ListItem>
            <ListItemText primary="Perilous Games, Ltd.: " />
            <Link href="https://www.perilousgames.com/" target="_blank" rel="noopener noreferrer">
              perilousgames.com
            </Link>
          </ListItem>
          <ListItem>
            <ListItemText primary="Kingdom Of God: " />
            <Link href="https://www.kingdomofgod.online" target="_blank" rel="noopener noreferrer">
              kingdomofgod.online
            </Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Contact;
