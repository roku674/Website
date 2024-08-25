// src/pages/Experience.js
import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const Experience = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Industry Experience</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Backend Software Engineer (ETL): Financial Data Analytics (2 Years - Present)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="API Engineer (Full Stack): Medical Liability Insurance (2 years)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Embedded Systems (TCU): Civil Traffic & Transportation (1 year)" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Experience;
