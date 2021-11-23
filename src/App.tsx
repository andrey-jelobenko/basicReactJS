import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  BOT_MESSAGE,
  INITIAL_MESSAGES,
  USERS,
} from "./Components/MessageList/constants";
import { MessageList } from "./Components/MessageList";
import { MessageForm } from "./Components/MessageForm";
import { ChatList } from "./Components/ChatList/ChatList";
import "./App.css";

function App() {
  const [messageList, setMessageList] = useState(INITIAL_MESSAGES);

  useEffect(() => {
    let timer: any = "";
    if (messageList[messageList.length - 1].author !== USERS.bot)
      timer = setTimeout(() => {
        setMessageList([...messageList, BOT_MESSAGE]);
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
