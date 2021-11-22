import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { MessageList } from "./Components/MessageList";
import { MessageForm } from "./Components/MessageForm";
import { ChatList } from "./Components/ChatList/ChatList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const INITIAL_MESSAGES = {
    id: uuidv4(),
    author: "бот",
    text: "Добро пожаловать в чат. Здесь вы можете оставить сообщение на любую интересующую вас тему.",
  };
  const BOT_MESSAGES = {
    id: uuidv4(),
    author: "бот",
    text: "Спасибо, что оставили сообщение!",
  };
  const [messageList, setMessageList] = useState([INITIAL_MESSAGES]);

  useEffect(() => {
    let timer: any = "";
    if (messageList[messageList.length - 1].author !== "бот")
      timer = setTimeout(() => {
        setMessageList([...messageList, BOT_MESSAGES]);
      }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [messageList]);

  return (
    <Grid container spacing={1} className="App">
      <Grid item xs={12} sm={4} md={3} lg={2} className="chat-list">
        <ChatList />
      </Grid>
      <Grid item xs={12} sm={8} md={9} lg={10} className="chat">
        <Box className="App-header">чат группы ReactJS 12.11</Box>
        <Box className="App-main">
          <MessageList messageList={messageList} />
        </Box>
        <Box className="App-footer">
          <MessageForm
            messageList={messageList}
            setMessageList={setMessageList}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
