// src/pages/Projects.js
import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const Projects = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Kingdom Of God - A website to connect people worldwide in a social media platform centered around philosophy and strong community." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Ad Astra - Currently in progress." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Automated Stock Trading Bot - Currently working on this project." />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Projects;
