import React, { useState } from "react";

const RNGsus = () => {
  const [bitLength, setBitLength] = useState(""); // State to store the bit length
  const [randomString, setRandomString] = useState(""); // State to store the generated random string

  // Function to generate a random string of the specified bit length
  const generateRandomString = (length) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Handler for the button click to generate the random string
  const handleGenerateClick = () => {
    // Convert bit length to string length (8 bits per character)
    const stringLength = Math.ceil((parseInt(bitLength) || Math.floor(Math.random() * 128 + 1)) / 8);
    setRandomString(generateRandomString(stringLength));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>RNGsus</h1>
      <div>
        <label htmlFor="bitLengthInput">Enter Bit Length: </label>
        <input
          type="number"
          id="bitLengthInput"
          value={bitLength}
          onChange={(e) => setBitLength(e.target.value)}
          placeholder="Enter bit length"
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleGenerateClick}>Generate Random String</button>
      </div>
      {randomString && (
        <div style={{ marginTop: "20px" }}>
          <h3>Generated Random String:</h3>
          <textarea
            rows="4"
            cols="50"
            value={randomString}
            readOnly
            style={{ resize: "none" }}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default RNGsus;
