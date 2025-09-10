// components/Sidebar.jsx
import React from 'react';
import '../styles/chat.css';

const Sidebar = ({ 
  conversations, 
  setConversations, 
  activeConversation, 
  setActiveConversation,
  darkMode,
  setDarkMode
}) => {
  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: 'New chat',
      messages: []
    };
    setConversations([newChat, ...conversations]);
    setActiveConversation(newChat);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button onClick={createNewChat} className="new-chat-btn">
          <span>+</span> New chat
        </button>
      </div>
      
      <div className="conversation-list">
        {conversations.map(conv => (
          <div 
            key={conv.id} 
            className={`conversation-item ${activeConversation?.id === conv.id ? 'active' : ''}`}
            onClick={() => setActiveConversation(conv)}
          >
            {conv.title}
          </div>
        ))}
      </div>
      
      <div className="sidebar-footer">
        <button 
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Light mode' : '🌙 Dark mode'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;