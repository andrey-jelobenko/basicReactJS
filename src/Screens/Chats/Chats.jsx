import { Grid } from "@mui/material/";
import { useState, useEffect, useContext } from "react";
import { MyChatListContext } from "../../Router/context";
import { useParams, Redirect } from "react-router-dom";
import { MessageList } from "../../Components/MessageList";
import { MessageForm } from "../../Components/MessageForm";
import { ChatList } from "../../Components/ChatList/ChatList";
import { BOT_MESSAGE, USERS } from "../../Components/MessageList/constants";
import { ROUTES } from "../../Router/constants";
import { v4 as uuidv4 } from "uuid";

export const Chats = () => {
  const { chatId } = useParams();
  const chatList = useContext(MyChatListContext);

  const messages =
    chatId && chatList[chatId] ? chatList[chatId].messages : [{}];

  const [messageList, setMessageList] = useState(messages);

  useEffect(() => {
    setMessageList(messages);
  }, [chatId]);

  useEffect(() => {
    let timer = 0;
    const botMessageList = { id: "", author: "", text: "" };
    if (messageList[messageList.length - 1].author !== USERS.BOT)
      timer = setTimeout(() => {
        if (BOT_MESSAGE.id === "") {
          botMessageList.id = uuidv4();
          botMessageList.author = BOT_MESSAGE.author;
          botMessageList.text = BOT_MESSAGE.text;
        }
        setMessageList([...messageList, botMessageList]);
      }, 1500);
    if (chatList[chatId]) chatList[chatId].messages = messageList;
    return () => {
      clearTimeout(timer);
    };
  }, [messageList]);

  if (!chatId || !chatList[chatId]) return <Redirect to={ROUTES.NO_CHAT} />;

  return (
    <Grid container spacing={1} className="Home">
      <Grid item xs={12} sm={4} md={3} lg={2} className="chat-list">
        <ChatList chatId={chatId} />
      </Grid>
      <Grid item xs={12} sm={8} md={9} lg={10}>
        <MessageList
          messageList={messageList}
          chatName={chatList[chatId].name}
        />
        <MessageForm
          chatId={chatId}
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </Grid>
    </Grid>
  );
};
