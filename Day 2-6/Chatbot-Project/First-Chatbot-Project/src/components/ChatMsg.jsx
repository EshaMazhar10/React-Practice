import RobotProfileImage from '../assets/robot.png';
import UsertProfileImage from '../assets/user.png';
import './ChatMsg.css';
import dayjs from 'dayjs';

export function ChatMsg({ message, sender, time }) {
        return (
          <div className={sender === 'user' ? 'msguser' : 'msgrobot'}>
            {sender === 'robot' && (
              <img src={RobotProfileImage} className="profile-image" />
            )}

            <div>
        <div className="chat-message">{message}</div>

        <div style={{ fontSize: "12px", color: "gray", marginLeft: "10px" }}>
          {time && dayjs(time).format("h:mm A")}
        </div>
      </div>

            {sender === 'user' && (
              <img src={UsertProfileImage} className="profile-image" />
            )}
          </div>
        );
      }