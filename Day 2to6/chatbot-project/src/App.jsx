import { useState, useEffect } from 'react'
import { MessageInput } from './components/MessageInput';
import ChatList from './components/ChatList';
import dayjs from 'dayjs';

import './App.css'

function App() {
  const now = dayjs().valueOf();

  const [chatList, setchatList] = useState(
    JSON.parse(localStorage.getItem('messages')) || [
      { text: 'Hello chatbot', from: 'robot', time: now, id: 'id1' }
    ]
  );

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatList));
  }, [chatList]);

  function clearChat() {
    setchatList([]); 
  }

  return (
    <div className="app-container">
    
      <ChatList ChatList={chatList} />

      <div className="input-row"> 
        <MessageInput 
          ChatList={chatList} 
          setChatList={setchatList} 
        />
        <button className="clear-button" onClick={clearChat}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;