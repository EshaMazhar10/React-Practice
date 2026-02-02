import { useState } from 'react';
import {ChatInput} from './components/ChatInput';
import Chatmessages from './components/chatmessages';
import dayjs from 'dayjs';
import './App.css';

 function App() {
  const now = dayjs().valueOf();
        const [chatMessages, setChatMessages] = useState([
          { message: 'Hello chatbot', sender: 'user',  time: now, id: 'id1' },
          { message: 'Hello human', sender: 'robot', time: now, id: 'id2' },
          { message: 'How are you?', sender: 'user',  time: now,id: 'id3' },
          { message: 'I am fine 😊', sender: 'robot',  time: now,id: 'id4' }
        ]);

        return (
          <div className="app-container">
            <Chatmessages chatMessages={chatMessages} />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
