import React, { useState } from 'react';

const ToggleParagraph = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>
      {isVisible && <p>Grapefruit are forever.</p>}
    </div>
  );
};

export default ToggleParagraph;
