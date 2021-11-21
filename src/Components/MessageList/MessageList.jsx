import Avatar from "@mui/material/Avatar";
import "./styleMessageList.scss";

export function MessageList({ messageList }) {
  return (
    <ul className="message_list">
      {messageList.map(({ id, author, text }) => (
        <li className="message_list-block" key={id}>
          <Avatar src="/broken-image.jpg" sx={{ width: 36, height: 36 }} />
          <div className="message_list__block">
            <span className="message_list__author">{author}</span>
            <p className="message_list__text">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
