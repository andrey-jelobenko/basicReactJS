import React from "react";
import { INIT_CHATS } from "../Components/ChatList/constants";

export const myChatListContext = React.createContext({ chatList: INIT_CHATS });
