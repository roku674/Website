// src/pages/Contact.js
import React from 'react';
import { Container, Typography, Box, Link, List, ListItem, ListItemText } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box mt={4} className="bubble"> {/* Apply the bubble class here */}
        <Typography variant="h4" gutterBottom>Contact Me</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <>
                  Email: <a href="mailto:roku674@gmail.com" style={{ color: '#fde047' }}>roku674@gmail.com</a>,{' '}
                  <a href="mailto:me@alexanderfields.me" style={{ color: '#fde047' }}>me@alexanderfields.me</a>,{' '}
                  <a href="mailto:fields.alexander@perilousgames.com" style={{ color: '#fde047' }}>fields.alexander@perilousgames.com</a>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="LinkedIn: " />
            <Link href="https://www.linkedin.com/in/alexander-a-fields" target="_blank" rel="noopener noreferrer" style={{ color: '#fde047' }}>
              Alexander Fields
            </Link>
          </ListItem>
          <ListItem>
            <ListItemText primary="GitHub: " />
            <Link href="https://www.github.com/roku674" target="_blank" rel="noopener noreferrer" style={{ color: '#fde047' }}>
              github.com/roku674
            </Link>
          </ListItem>
          <ListItem>
            <ListItemText primary="Perilous Games, Ltd.: " />
            <Link href="https://www.perilousgames.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fde047' }}>
              perilousgames.com
            </Link>
          </ListItem>
          <ListItem>
            <ListItemText primary="Kingdom Of God: (under construction)" />
            <Link href="https://www.kingdomofgod.online" target="_blank" rel="noopener noreferrer" style={{ color: '#fde047' }}>
              kingdomofgod.online
            </Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Contact;
