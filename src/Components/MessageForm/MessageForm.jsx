import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { v4 as uuidv4 } from "uuid";
import "./styleMessageForm.scss";

export function MessageForm({ messageList, setMessageList }) {
  const [messageAuthor, setMessageAuthor] = useState("");
  const [messageText, setMessageText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [messageAuthor]);

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
  const handleReset = (e) => {
    setMessageAuthor("");
    setMessageText("");
  };

  return (
    <form
      className="message-form"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <TextField
        id="outlined-basic"
        label="ваше имя"
        variant="outlined"
        className="message-form__author"
        value={messageAuthor}
        onChange={handleAuthorChange}
        size="small"
        margin="dense"
        inputRef={inputRef}
      />
      <TextField
        id="outlined-textarea"
        label="написать сообщение..."
        multiline
        className="message-form__text"
        value={messageText}
        onChange={handleTextChange}
        size="small"
        margin="dense"
      />
      <div className="margin-1"></div>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleReset}
        >
          очистить
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleAdd}>
          отправить
        </Button>
      </Stack>
      <div className="margin-1"></div>
    </form>
  );
}

export function MultilineTextFields() {
  return null;
}
