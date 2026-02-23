import { useState } from 'react';
import chatbot from 'supersimpledev/chatbot';
import './MessageInput.css';
import dayjs from 'dayjs';

export function MessageInput({ ChatList, setChatList }) {
        const [InputText, setInputText] = useState('');

        function SaveInputText(event) {
          setInputText(event.target.value);
        }

       function SendMsg() {

      const userTime = dayjs().valueOf();

        const newChatmessages = [
                ...ChatList,
                {
                text: InputText,
                from: 'user',
                time: userTime,
                id: crypto.randomUUID()
                }
        ];

  setChatList(newChatmessages);

  const response = chatbot.getResponse(InputText);

  setChatList([
    ...newChatmessages,
    {
      text: response,
      from: 'robot',
      time: dayjs().valueOf(),
      id: crypto.randomUUID()
    }
  ]);

  setInputText('');
}

        return (
          <div className="input-container">
            <input
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={SaveInputText}
              value={InputText}
              className="chatInput"
            />
            <button
              className="send-button"
              onClick={SendMsg}
            >
              Send
            </button>
          </div>
        );
      }