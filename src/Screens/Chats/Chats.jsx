import { Grid } from "@mui/material/";
import { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { MessageList } from "../../Components/MessageList";
import { MessageForm } from "../../Components/MessageForm";
import { ChatList } from "../../Components/ChatList/ChatList";
import { BOT_MESSAGE, USERS } from "../../Components/MessageList/constants";
import { ROUTES } from "../../Router/constants";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { chatListSelector } from "../../Store/Chats/selectors";
import { addMessageAction } from "../../Store/Messages/actions";
import { chatMessagesSelector } from "../../Store/Messages/selectors";

export const Chats = () => {
  const { chatId } = useParams();
  const { chatList } = useSelector(chatListSelector);
  const dispatch = useDispatch();
  const messageListHere = useSelector(chatMessagesSelector({ chatId }));

  useEffect(() => {
    let timer = 0;
    const botMessageList = { id: "", author: "", text: "" };
    if (messageListHere[messageListHere.length - 1].author !== USERS.BOT)
      timer = setTimeout(() => {
        if (BOT_MESSAGE.id === "") {
          botMessageList.id = uuidv4();
          botMessageList.author = BOT_MESSAGE.author;
          botMessageList.text = BOT_MESSAGE.text;
        }
        dispatch(
          addMessageAction({
            chatId: chatId,
            messages: [...messageListHere, botMessageList],
          })
        );
      }, 500);
    if (chatList[chatId]) chatList[chatId].messages = messageListHere;
    return () => {
      clearTimeout(timer);
    };
  }, [messageListHere]);

  if (!chatId || !chatList[chatId]) return <Redirect to={ROUTES.NO_CHAT} />;

  return (
    <Grid container spacing={1} className="Home">
      <Grid item xs={12} sm={4} md={3} lg={2} className="chat-list">
        <ChatList chatId={chatId} />
      </Grid>
      <Grid item xs={12} sm={8} md={9} lg={10}>
        <MessageList chatId={chatId} chatName={chatList[chatId].name} />
        <MessageForm chatId={chatId} />
      </Grid>
    </Grid>
  );
};
