import { ADD_CHAT_ACTION, REMOVE_CHAT_ACTION } from "./constants";
import { v4 as uuidv4 } from "uuid";
import {
  INIT_CHATS,
  WELCOME_MESSAGE,
} from "../../Components/ChatList/constants";

const initialState = {
  chatList: INIT_CHATS,
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION: {
      return {
        ...state,
        chatList: {
          ...state.chatList,
          [uuidv4()]: {
            name: action.payload.name,
            avatar: action.payload.avatar,
            date: action.payload.date,
            messages: WELCOME_MESSAGE,
          },
        },
      };
    }
    case REMOVE_CHAT_ACTION: {
      const { chatIdRemove } = action.payload;
      delete state.chatList[chatIdRemove];
      return {
        ...state,
        chatList: {
          ...state.chatList,
        },
      };
    }
    default:
      return state;
  }
};
