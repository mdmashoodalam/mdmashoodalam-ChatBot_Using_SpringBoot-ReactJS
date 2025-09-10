// App.js
import React, { useState } from 'react';
import ChatContainer from './components/ChatContainer';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Sidebar 
        conversations={conversations}
        setConversations={setConversations}
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <ChatContainer 
        conversation={activeConversation}
        setConversations={setConversations}
      />
    </div>
  );
}

export default App;