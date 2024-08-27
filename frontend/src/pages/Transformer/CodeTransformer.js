import React, { useState } from 'react';
import { TextField, MenuItem, Select, Button, Container, Typography } from '@mui/material';

const CodeTransformer = () => {
  const [codeInput, setCodeInput] = useState('');
  const [language, setLanguage] = useState('csharp');
  const [transformedCode, setTransformedCode] = useState('');

  const handleCodeChange = (event) => {
    setCodeInput(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleTransformClick = () => {
    // Here you would add your code transformation logic
    let result;
    switch (language) {
      case 'csharp':
        result = transformCSharpToJava(codeInput);
        break;
      case 'java':
        result = transformJavaToCSharp(codeInput);
        break;
      default:
        result = 'Transformation not supported yet.';
    }
    setTransformedCode(result);
  };

  const transformCSharpToJava = (code) => {
    // Example transformation logic, replace with real transformation
    return `Transformed C# to Java: ${code}`;
  };

  const transformJavaToCSharp = (code) => {
    // Example transformation logic, replace with real transformation
    return `Transformed Java to C#: ${code}`;
  };

  return (
    <Container maxWidth="sm" className="bubble">  {/* Apply the bubble class for styling */}
      <Typography variant="h4" component="h1" gutterBottom className="center-text">
        Code Transformer
      </Typography>
      <TextField
        label="Input Code"
        multiline
        rows={6}
        variant="outlined"
        fullWidth
        value={codeInput}
        onChange={handleCodeChange}
        margin="normal"
        className="w3-input"  
      />
      <Select
        value={language}
        onChange={handleLanguageChange}
        fullWidth
        variant="outlined"
        margin="normal"
        className="w3-select" 
      >
        <MenuItem value="csharp">C#</MenuItem>
        <MenuItem value="java">Java</MenuItem>
        {/* Add more languages here */}
      </Select>
      <Button
        variant="contained"
        color="primary"
        onClick={handleTransformClick}
        fullWidth
        className="w3-btn"
      >
        Transform Code
      </Button>
      <TextField
        label="Transformed Code"
        multiline
        rows={6}
        variant="outlined"
        fullWidth
        value={transformedCode}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
        className="w3-input" 
      />
    </Container>
  );
};

export default CodeTransformer;
