import { ADD_MESSAGE_ACTION, REMOVE_MESSAGE_ACTION } from "./constants";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});

export const removeMessageAction = (payload) => ({
  type: REMOVE_MESSAGE_ACTION,
  payload,
});
