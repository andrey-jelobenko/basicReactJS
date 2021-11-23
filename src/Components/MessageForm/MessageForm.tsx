import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { v4 as uuidv4 } from "uuid";
import { BasicModal } from "../Utils/BasicModal";
import { USERS } from "./../MessageList/constants";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "./styleMessageForm.scss";

export function MessageForm({ messageList, setMessageList }: any) {
  const [author] = useState(USERS.me);
  const [messageText, setMessageText] = useState("");
  const [modal, setModal] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const inputRef: any = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [messageText]);

  const handleTextChange = (e: any) => setMessageText(e.target.value);
  const handleAddMessage = (e: any) => {
    if (messageText.trim() === "") {
      setModal(true);
      setMessageAlert("Вы ничего не написали ...");
      return;
    }
    if (author === USERS.bot) {
      setModal(true);
      setMessageAlert("Вы не можете оставлять сообщения от этого имени");
      return;
    }
    const newMessage = {
      id: uuidv4(),
      author: author,
      text: messageText,
    };

    setMessageText("");
    return setMessageList([...messageList, newMessage]);
  };
  const handleReset = (e: any) => {
    setMessageText("");
  };

  return (
    <>
      <Typography
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <TextField
          id="outlined-textarea"
          label="написать сообщение..."
          multiline
          value={messageText}
          onChange={handleTextChange}
          inputRef={inputRef}
          size="small"
          sx={{ mb: "0.6em", mt: "0.6em", flexGrow: 1 }}
        />
        <IconButton
          color="primary"
          aria-label="directions"
          onClick={handleReset}
          sx={{
            p: "10px 5px 10px 20px",
            mb: "7px",
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          color="primary"
          sx={{
            p: "8px",
            mb: "9px",
          }}
          aria-label="directions"
          onClick={handleAddMessage}
        >
          <SendIcon />
        </IconButton>
      </Typography>
      <BasicModal
        modal={modal}
        setModal={setModal}
        messageAlert={messageAlert}
      />
    </>
  );
}

export function MultilineTextFields() {
  return null;
}
