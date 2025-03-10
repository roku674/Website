// src/pages/Products.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Products = () => {
  return (
    <Container>
      <Box 
        mt={4} 
        className="bubble"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="h4" gutterBottom>Products (None Yet)</Typography>
      </Box>
    </Container>
  );
};

export default Products;
