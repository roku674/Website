import React, { useState } from "react";

const URLEncoder = () => {
  const [inputString, setInputString] = useState(""); // State to store the user's input string
  const [encodedString, setEncodedString] = useState(""); // State to store the URL encoded string

  // Function to URL encode the input string
  const encodeString = (str) => {
    return encodeURIComponent(str);
  };

  // Handler for the button click to encode the input string
  const handleEncodeClick = () => {
    setEncodedString(encodeString(inputString));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>URL Encoder</h1>
      <div>
        <label htmlFor="stringInput">Enter String to Encode: </label>
        <input
          type="text"
          id="stringInput"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          placeholder="Enter a string"
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleEncodeClick}>Encode String</button>
      </div>
      {encodedString && (
        <div style={{ marginTop: "20px" }}>
          <h3>Encoded String:</h3>
          <textarea
            rows="4"
            cols="50"
            value={encodedString}
            readOnly
            style={{ resize: "none" }}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default URLEncoder;
