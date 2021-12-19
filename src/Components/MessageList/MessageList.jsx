import { Avatar, Box, Typography, List, ListItem } from "@mui/material/";
import "./styleMessageList.scss";
import { useSelector } from "react-redux";
import { messageListSelector } from "../../Store/Messages/selectors";
import { WELCOME_MESSAGE } from "../ChatList/constants";

export function MessageList({ chatId, chatName }) {
  const { messages } = useSelector(messageListSelector);
  const messageList = messages.messageList[chatId] ?? WELCOME_MESSAGE;

  return (
    <List>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        className="message_list__title"
      >
        {chatName}
      </Typography>
      {messageList.map(({ id, author, text }) => (
        <ListItem key={id}>
          <Avatar
            className="message_list-img"
            src="/broken-image.jpg"
            sx={{ width: 32, height: 32 }}
          />
          <Box className="message_list__block">
            <Typography className="message_list__author">{author}</Typography>
            <Typography className="message_list__text">{text}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
