import { ADD_CHAT_ACTION, REMOVE_CHAT_ACTION } from "./constants";

export const addChatAction = (payload) => ({
  type: ADD_CHAT_ACTION,
  payload,
});
export const removeChatAction = (payload) => ({
  type: REMOVE_CHAT_ACTION,
  payload,
});
