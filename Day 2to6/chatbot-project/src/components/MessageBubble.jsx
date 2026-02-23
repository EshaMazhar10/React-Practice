import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import dayjs from 'dayjs';

import './MessageBubble.css';
 
export function MessageBubble({ text, from, time }) {

  return (
    <div className={from === 'user' ? 'msguser' : 'msgrobot'}>
      {from === 'robot' && (
        <img
          src={RobotProfileImage}
          className="profile-image"
          alt="robot"
        />
      )}

      <div>
        <div className="chat-message">{text}</div>

        <div style={{ fontSize: "12px", color: "gray", marginLeft: "10px" }}>
          {time && dayjs(time).format("h:mm A")}
        </div>
      </div>

      {from === 'user' && (
        <img
          src={UserProfileImage}
          className="profile-image"
          alt="user"
        />
      )}
    </div>
  );
}
