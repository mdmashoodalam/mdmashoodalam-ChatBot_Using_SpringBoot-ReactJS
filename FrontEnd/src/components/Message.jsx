import React from 'react';

const Message = ({ message }) => {
  // Safely handle any message format
  const getMessageText = () => {
    if (!message) return '';
    if (typeof message === 'string') return message;
    if (typeof message.text === 'string') return message.text;
    if (message.response) return message.response;
    if (message.message) return message.message;
    return JSON.stringify(message);
  };

  const messageText = getMessageText();

  return (
    <div className={`message ${message.sender || 'bot'}`}>
      <div className="avatar">
        {(message.sender === 'user') ? '👤' : '🤖'}
      </div>
      <div className="content">
        {messageText.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Message;