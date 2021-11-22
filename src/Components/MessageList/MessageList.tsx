import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./styleMessageList.scss";

export function MessageList({ messageList }: any) {
  return (
    <List>
      {messageList.map(({ id, author, text }: any) => (
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
