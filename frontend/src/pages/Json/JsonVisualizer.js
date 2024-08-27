// src/tools/JsonVisualizer.js
import React, { useState } from 'react';
import JsonViewer from './JsonViewer';  // Import your existing JsonViewer component

const JsonVisualizer = () => {
  const [jsonData, setJsonData] = useState('');
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setJsonData(event.target.value);
  };

  const handleVisualizeClick = () => {
    try {
      const parsed = JSON.parse(jsonData);
      setParsedData(parsed);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Invalid JSON format');
      setParsedData(null);
    }
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
      <button onClick={handleVisualizeClick}>Visualize JSON</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {parsedData && <JsonViewer data={parsedData} />}
    </div>
  );
};

export default JsonVisualizer;
