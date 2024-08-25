// src/pages/Home.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Welcome to My Portfolio</Typography>
        <Typography variant="body1" paragraph>
          Hi, I'm Alexander Fields, a software engineer with a passion for backend development, ETL processes, API engineering, and embedded systems. I'm always learning and currently expanding my skills through LinkedIn Learning.
        </Typography>
        <Typography variant="body1" paragraph>
          If your business takes card payments and is looking to save money, please reach out!
        </Typography>
        <Typography variant="body1">
          👯 If you're looking to collaborate on anything just hit me up.
        </Typography>
        <Typography variant="body1">
          💬 Ask me about Perilous Games, Ltd.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
