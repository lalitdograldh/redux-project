import React, { useState } from 'react';

const UppercaseCounter = () => {
  const [text, setText] = useState('');

  // Function to count uppercase letters
  const countUppercaseLetters = (inputText) => {
    return (inputText.match(/[A-Z]/g) || []).length;
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h3>Uppercase Letter Counter</h3>
      <textarea
        value={text}
        onChange={handleTextChange}
        rows="10"
        cols="50"
        placeholder="Type here..."
      />
      <p>Uppercase Letter Count: {countUppercaseLetters(text)}</p>
    </div>
  );
};

export default UppercaseCounter;
