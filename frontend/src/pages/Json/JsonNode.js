// src/JsonNode.js
import React, { useState } from 'react';

const JsonNode = ({ data, indent = 0 }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const renderObject = (obj, indentLevel) => {
    return Object.entries(obj).map(([key, value], index) => (
      <div key={index} style={{ marginLeft: indentLevel }}>
        <span onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
          {isCollapsed ? `"{...}"` : `"${key}": `}
        </span>
        {!isCollapsed && (
          <span>{renderValue(value, indentLevel + 20)}</span>
        )}
      </div>
    ));
  };

  const renderArray = (arr, indentLevel) => {
    return arr.map((item, index) => (
      <div key={index} style={{ marginLeft: indentLevel }}>
        {!isCollapsed && renderValue(item, indentLevel + 20)}
      </div>
    ));
  };

  const renderValue = (value, indentLevel) => {
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        return (
          <>
            <span onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
              {isCollapsed ? '[...]' : '[Array]'}
            </span>
            {!isCollapsed && (
              <div style={{ marginLeft: indentLevel + 20 }}>
                {renderArray(value, indentLevel)}
              </div>
            )}
          </>
        );
      } else {
        return (
          <>
            <span onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
              {isCollapsed ? '{...}' : '{'}
            </span>
            {!isCollapsed && (
              <div style={{ marginLeft: indentLevel + 20 }}>
                {renderObject(value, indentLevel)}
              </div>
            )}
            {!isCollapsed && <span>{'}'}</span>}
          </>
        );
      }
    } else {
      return (
        <span className={`json-value-${typeof value}`}>
          {typeof value === 'string' ? `"${value}"` : String(value)}
        </span>
      );
    }
  };

  return <div>{renderValue(data, indent)}</div>;
};

export default JsonNode;
