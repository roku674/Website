// Import necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS (you can create this file to add global styles)
import App from './App'; // Import the main App component

// Get the root element from the HTML document
const rootElement = document.getElementById('root');

// Create a root using ReactDOM
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
