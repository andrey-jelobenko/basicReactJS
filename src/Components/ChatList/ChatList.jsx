import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";

export function ChatList() {
  const chatList = [
    { id: uuidv4(), name: "Фотографии", avatar: "Ph", data: "Янв 9, 2014" },
    { id: uuidv4(), name: "Работа", avatar: "Wo", data: "Фев 7, 2017" },
    { id: uuidv4(), name: "Вакансии", avatar: "Va", data: "Июнь 15, 2014" },
    { id: uuidv4(), name: "Путешествия", avatar: "Jo", data: "Сент 20, 2016" },
  ];

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {chatList.map(({ id, name, avatar, data }) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: deepOrange[600] }}>{avatar}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={data} />
        </ListItem>
      ))}
    </List>
  );
}
