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
          <Typography variant="h6" className="center-text">
                I'm not a Person/Company owner that'd ever ask you to donate during
                a purchase. Companies do that because they want to use your 
                money for a tax break! Deep down they really don't care about
                donating. That being said I'll  be taking the profits 
                from purchases and donating it so don't worry! 
                You buying my products is automatically donating. 
              </Typography>      
    </Container>
  );
};

export default Products;
