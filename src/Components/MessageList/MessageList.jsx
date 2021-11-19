import "./styleMessageList.scss";
import { v4 as uuidv4 } from "uuid";

export function MessageList({ messageList }) {
  return (
    <ul className="message_list">
      {messageList.map(({ author, text }) => (
        <li key={uuidv4()}>
          <span className="message_list__author">{author}</span>
          <p className="message_list__text">{text}</p>
        </li>
      ))}
    </ul>
  );
}
