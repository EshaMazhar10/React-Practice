import {useState} from 'react';
import chatbot from 'supersimpledev/chatbot';
import './ChatInput.css';
import dayjs from 'dayjs';

export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState('');
        function SaveInputText(event){
            setInputText(event.target.value);
        }

        function SendMessage() {
  // 1. Get the current time once to use for both messages if needed
  const currentTime = dayjs().valueOf();

  const updatedMessages = [
    ...chatMessages,
    {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID(),
      time: currentTime 
    }
  ];

  setChatMessages(updatedMessages);

  const response = chatbot.getResponse(inputText);

  setChatMessages([
    ...updatedMessages,
    {
      message: response,
      sender: 'robot',
      id: crypto.randomUUID(),
      time: dayjs().valueOf() 
    }
  ]);

  setInputText('');
}

        return (
          <div className="input-container">
            <input
              placeholder="Send a message to Chatbot"
              size="30"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="chatInput"
            />
            <button className="send-button" onClick={SendMessage}>
              Send
            </button>
          </div>
        );
      }
