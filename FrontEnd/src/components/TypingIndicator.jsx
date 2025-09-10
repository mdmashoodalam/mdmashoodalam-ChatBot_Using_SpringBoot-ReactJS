// components/TypingIndicator.jsx
import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="message bot">
      <div className="avatar">
        <span>🤖</span>
      </div>
      <div className="content">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;