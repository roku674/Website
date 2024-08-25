// src/components/Footer.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import '../index.css'; // Import the CSS file

const Footer = () => {
  return (
    <Box mt={5} py={3} bgcolor="text.secondary" color="white" textAlign="center">
      <Typography variant="body2">
        © {new Date().getFullYear()} Alexander Fields. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;