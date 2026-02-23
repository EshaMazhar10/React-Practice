import { useRef, useEffect } from 'react'
import { MessageBubble } from './MessageBubble';
import './ChatList.css';

 function ChatList({ ChatList }) {
        const chatMessagesRef = useRef(null);

       useEffect(() => {

        const containerElem = chatMessagesRef.current;
        if(containerElem){
          containerElem.scrollTop = containerElem.scrollHeight;
        }
       },[ChatList]);
        return (
          <div className="message-container" ref={chatMessagesRef}>
            {ChatList.map((msg) => (
              <MessageBubble
                key={msg.id}
                text={msg.text}
                from={msg.from}
                time={msg.time}
             />

            ))}
          </div>
        );
      }
      export default ChatList;