// src/tools/JsonVisualizer.js
import React, { useState } from 'react';
import JsonViewer from './JsonViewer';  // Import your existing JsonViewer component

const JsonVisualizer = () => {
  const [jsonData, setJsonData] = useState('');
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('Java'); // State to track selected language
  const [generatedCode, setGeneratedCode] = useState(''); // State to track generated code

  const handleInputChange = (event) => {
    setJsonData(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleVisualizeClick = () => {
    try {
      const parsed = JSON.parse(jsonData);
      setParsedData(parsed);
      setError(null); // Clear any previous errors
      generateCode(parsed);
    } catch (err) {
      setError('Invalid JSON format');
      setParsedData(null);
      setGeneratedCode(''); // Clear generated code
    }
  };

  // Function to generate Java or C# class code based on the JSON
  const generateCode = (data) => {
    let code = '';
    if (language === 'Java') {
      code = generateJavaClass(data);
    } else if (language === 'C#') {
      code = generateCSharpClass(data);
    }
    setGeneratedCode(code);
  };

  // Function to generate Java class code
  const generateJavaClass = (data, className = 'MyClass') => {
    let fields = '';
    let constructorParams = '';
    let assignments = '';

    for (let key in data) {
      let fieldType = getJavaType(data[key]);
      fields += `    private ${fieldType} ${key};\n`;
      constructorParams += `${fieldType} ${key}, `;
      assignments += `        this.${key} = ${key};\n`;
    }

    constructorParams = constructorParams.slice(0, -2); // Remove trailing comma and space

    // Generating the Java class
    return `public class ${className} {\n${fields}\n` +
      `    // Default constructor\n` +
      `    public ${className}() {\n` +
      `${initializeDefaultsJava(data)}    }\n\n` +
      `    // Parameterized constructor\n` +
      `    public ${className}(${constructorParams}) {\n` +
      `${assignments}    }\n` +
      `}`;
  };

  // Helper function to determine Java type based on JSON value
  const getJavaType = (value) => {
    if (typeof value === 'number') return 'int';
    if (typeof value === 'boolean') return 'boolean';
    if (Array.isArray(value)) return 'List<Object>'; // Simplified for demonstration
    if (typeof value === 'object') return 'Object';
    return 'String';
  };

  // Helper function to initialize Java fields to their defaults
  const initializeDefaultsJava = (data) => {
    let initCode = '';
    for (let key in data) {
      let fieldType = getJavaType(data[key]);
      if (fieldType === 'List<Object>') {
        initCode += `        this.${key} = new ArrayList<>();\n`;
      } else if (fieldType === 'Object') {
        initCode += `        this.${key} = new ${capitalizeFirstLetter(key)}();\n`; // Assuming nested object has a class name capitalized
      } else if (fieldType === 'String') {
        initCode += `        this.${key} = "";\n`;
      } else {
        initCode += `        this.${key} = 0;\n`; // Default value for int or boolean
      }
    }
    return initCode;
  };

  // Function to generate C# class code
  const generateCSharpClass = (data, className = 'MyClass') => {
    let fields = '';
    let constructorParams = '';
    let assignments = '';

    for (let key in data) {
      let fieldType = getCSharpType(data[key]);
      fields += `    public ${fieldType} ${key} { get; set; }\n`;
      constructorParams += `${fieldType} ${key}, `;
      assignments += `        this.${key} = ${key};\n`;
    }

    constructorParams = constructorParams.slice(0, -2); // Remove trailing comma and space

    // Generating the C# class
    return `public class ${className} {\n${fields}\n` +
      `    // Default constructor\n` +
      `    public ${className}() {\n` +
      `${initializeDefaultsCSharp(data)}    }\n\n` +
      `    // Parameterized constructor\n` +
      `    public ${className}(${constructorParams}) {\n` +
      `${assignments}    }\n` +
      `}`;
  };

  // Helper function to determine C# type based on JSON value
  const getCSharpType = (value) => {
    if (typeof value === 'number') return 'int';
    if (typeof value === 'boolean') return 'bool';
    if (Array.isArray(value)) return 'List<object>'; // Simplified for demonstration
    if (typeof value === 'object') return 'object';
    return 'string';
  };

  // Helper function to initialize C# fields to their defaults
  const initializeDefaultsCSharp = (data) => {
    let initCode = '';
    for (let key in data) {
      let fieldType = getCSharpType(data[key]);
      if (fieldType === 'List<object>') {
        initCode += `        this.${key} = new List<object>();\n`;
      } else if (fieldType === 'object') {
        initCode += `        this.${key} = new ${capitalizeFirstLetter(key)}();\n`; // Assuming nested object has a class name capitalized
      } else if (fieldType === 'string') {
        initCode += `        this.${key} = "";\n`;
      } else {
        initCode += `        this.${key} = 0;\n`; // Default value for int or bool
      }
    }
    return initCode;
  };

  // Helper function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <h2>JSON JsonVisualizer</h2>
      <textarea
        value={jsonData}
        onChange={handleInputChange}
        rows="10"
        cols="50"
        placeholder="Paste your JSON here..."
      />
      <br />
      <label>
        Choose Language:
        <select value={language} onChange={handleLanguageChange}>
          <option value="Java">Java</option>
          <option value="C#">C#</option>
        </select>
      </label>
      <br />
      <button onClick={handleVisualizeClick}>Visualize JSON</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {parsedData && <JsonViewer data={parsedData} />}
      {generatedCode && (
        <div>
          <h3>Generated {language} Code</h3>
          <pre>{generatedCode}</pre>
        </div>
      )}
    </div>
  );
};

export default JsonVisualizer;
