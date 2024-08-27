// src/JsonViewer.js
import React from 'react';
import JsonNode from './JsonNode';

const JsonViewer = ({ data }) => {
  return (
    <div className="json-viewer">
      <JsonNode data={data} indent={0} />
    </div>
  );
};

export default JsonViewer;