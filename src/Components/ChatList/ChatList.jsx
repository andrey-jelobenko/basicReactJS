import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Typography,
} from "@mui/material/";
import { deepOrange } from "@mui/material/colors";
import "./ChatList.scss";
import { useDispatch, useSelector } from "react-redux";
import { chatListSelector } from "../../Store/Chats/selectors";
import { addChatAction, removeChatAction } from "../../Store/Chats/actions";
import { INITIAL_MESSAGE } from "./constants";
import { removeMessageAction } from "../../Store/Messages/actions";

export function ChatList({ chatId }) {
  const { chatList } = useSelector(chatListSelector);
  const dispatch = useDispatch();

  function handleAddChat() {
    dispatch(
      addChatAction({
        name: "Новый чат",
        avatar: "Nw",
        date: "дата создания",
        messages: INITIAL_MESSAGE,
      })
    );
  }
  function handleRemoveChat(e) {
    const confirmRemove = window.confirm("remove chat");
    if (confirmRemove) {
      const chatIdRemove = e.target.dataset.idremove;
      dispatch(removeMessageAction({ chatIdRemove }));
      dispatch(removeChatAction({ chatIdRemove }));
    }
  }

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {Object.keys(chatList).map((id) => (
          <ListItem key={id} selected={id === chatId ? true : false}>
            <Typography
              data-idremove={id}
              component="span"
              className="delete-chat"
              onClick={handleRemoveChat}
            >
              x
            </Typography>
            <Link className="link-chat" to={"/chats/" + id}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: deepOrange[600] }}>
                  {chatList[id].avatar}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={chatList[id].name}
                secondary={chatList[id].date}
              />
            </Link>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={handleAddChat}>
        создать чат
      </Button>
    </>
  );
}
