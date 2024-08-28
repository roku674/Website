import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';

const CommaSeparater = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleConvert = () => {
    // Split input by newline, filter out empty lines, and join with commas
    const commaSeparated = inputText
      .split('\n')
      .filter((line) => line.trim() !== '')
      .join(', ');
    setOutputText(commaSeparated);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Paper
        elevation={3}  // Elevation adds shadow for depth
        style={{
          padding: '20px',  // Padding inside the bubble
          borderRadius: '16px',  // Rounded corners
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Shadow effect for bubble-like appearance
          backgroundColor: '#f5f5f5'  // Background color for the bubble
        }}
      >
        <Typography variant="h4" gutterBottom color="inherit">
          Comma Separator Tool
        </Typography>
        <Box mb={3}>
          <TextField
            label="Enter your text (one item per line)"
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleConvert}
          fullWidth
        >
          Convert to Comma-Separated List
        </Button>
        <Box mt={3}>
          <TextField
            label="Comma-Separated Output"
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            value={outputText}
            readOnly
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default CommaSeparater;
