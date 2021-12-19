import { ADD_MESSAGE_ACTION, REMOVE_MESSAGE_ACTION } from "./constants";

const initialState = {
  // messageList{ chatId: { messages: [{ id, text, author, }] } }
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION: {
      const { chatId, messages } = action.payload;
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [chatId]: messages,
        },
      };
    }
    case REMOVE_MESSAGE_ACTION: {
      const { chatIdRemove } = action.payload;
      delete state.messageList[chatIdRemove];
      return {
        ...state,
        messageList: {
          ...state.messageList,
        },
      };
    }
    default:
      return state;
  }
};
