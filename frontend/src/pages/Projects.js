// src/pages/Projects.js
import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const Projects = () => {
  return (
    <Container>
      <Box mt={4} className="bubble"> {/* Apply the bubble class here */}
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <List>
          {/* Kingdom Of God Project */}
          <ListItem>
            <ListItemText
              primary={
                <>
                  Kingdom Of God - A website to connect people worldwide in a social media platform centered around philosophy and strong community.{' '}
                  <a href="https://www.kingdomofgod.online" target="_blank" rel="noopener noreferrer" style={{ color: '#fde047' }}>
                    Visit Website
                  </a>{' '}
                  |{' '}
                  <a href="https://github.com/kingdomofgod-online/kog-website" target="_blank" rel="noopener noreferrer" style={{ color: '#fde047' }}>
                    GitHub Repository
                  </a>
                </>
              }
            />
          </ListItem>

          {/* Ad Astra Imperium Project */}
          <ListItem>
            <ListItemText
              primary={
                <>
                  Ad Astra Imperium - Video Game currently in progress.{' '}
                  <a href="https://www.perilousgames.com/dashboard/games" target="_blank" rel="noopener noreferrer" style={{ color: '#fde047' }}>
                    Download Ad Astra
                  </a>
                </>
              }
            />
          </ListItem>

          {/* Automated Stock Trading Bot Project */}
          <ListItem>
            <ListItemText primary="Automated Stock Trading Bot - Currently working on this project." />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Projects;