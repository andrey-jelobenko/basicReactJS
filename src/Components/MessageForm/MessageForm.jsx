import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styleMessageForm.scss";

export function MessageForm({ messageList, setMessageList }) {
  const [messageAuthor, setMessageAuthor] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleAuthorChange = (e) => setMessageAuthor(e.target.value);
  const handleTextChange = (e) => setMessageText(e.target.value);

  const handleAdd = (e) => {
    if (messageAuthor === "" || messageText === "")
      return alert("не заполнены необходимые данные");
    if (messageAuthor === "бот")
      return alert("вы не можете оставлять сообщения от этого имени");
    const newMessage = {
      id: uuidv4(),
      author: messageAuthor,
      text: messageText,
    };
    setMessageAuthor("");
    setMessageText("");
    return setMessageList([...messageList, newMessage]);
  };

  return (
    <form
      className="message-form"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="message-form__author"
        value={messageAuthor}
        onChange={handleAuthorChange}
        placeholder="ваше имя"
      />
      <textarea
        className="message-form__text"
        value={messageText}
        onChange={handleTextChange}
        placeholder="текст сообщения"
      ></textarea>
      <input
        className="message-form__submit"
        type="submit"
        onClick={handleAdd}
        value="добавить"
      ></input>
    </form>
  );
}
