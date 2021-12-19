import { WELCOME_MESSAGE } from "../../Components/ChatList/constants";

export const messageListSelector = (state) => state;

export function chatMessagesSelector({ chatId }) {
  return (state) => state.messages.messageList[chatId] ?? WELCOME_MESSAGE;
}
