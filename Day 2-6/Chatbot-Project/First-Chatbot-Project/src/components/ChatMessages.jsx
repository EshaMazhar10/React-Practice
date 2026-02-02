 import {useRef, useEffect} from 'react';
import { ChatMsg } from './ChatMsg';
import './ChatMessages.css';
 
  function Chatmessages({ chatMessages }) {
       const chatmessageRef = useRef(null);


        useEffect(() => {
          const containerElem =  chatmessageRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }


        } , [chatMessages]);
        return (
          <div className="message-container"
         ref={chatmessageRef} >
            
            {chatMessages.map((chatmsg) => (
              <ChatMsg
                key={chatmsg.id}
                message={chatmsg.message}
                sender={chatmsg.sender}
                time={chatmsg.time}
              />
            ))}
          </div>
        );
      }
      export default Chatmessages;