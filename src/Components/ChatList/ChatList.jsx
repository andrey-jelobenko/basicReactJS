import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material/";
import { deepOrange } from "@mui/material/colors";
import "./ChatList.scss";

export function ChatList({ chatId, chatList }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {Object.keys(chatList).map((id) => (
        <ListItem key={id} selected={id === chatId ? true : false}>
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
  );
}
