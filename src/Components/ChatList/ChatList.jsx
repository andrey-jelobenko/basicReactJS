import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material/";
import { deepOrange } from "@mui/material/colors";
// import { chatList, INIT_CHATS } from "./constants";
import "./ChatList.scss";

export function ChatList({ chatList }) {
  const newChatList = { ...chatList };
  delete newChatList["id0"];
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {Object.keys(newChatList).map((id) => (
        <ListItem key={id}>
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
  //   return (
  //     <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
  //       {chatList.map(({ id, name, avatar, date }) => (
  //         <ListItem key={id}>
  //           <Link className="link-chat" to={"/chats/" + id}>
  //             <ListItemAvatar>
  //               <Avatar sx={{ bgcolor: deepOrange[600] }}>{avatar}</Avatar>
  //             </ListItemAvatar>
  //             <ListItemText primary={name} secondary={date} />
  //           </Link>
  //         </ListItem>
  //       ))}
  //     </List>
  //   );
}
