import { v4 as uuidv4 } from "uuid";
export const USERS = { bot: "чат-бот", me: "Андрей" };

export const INITIAL_MESSAGES = [
  {
    id: uuidv4(),
    author: USERS.bot,
    text: "Добро пожаловать в наш чат.",
  },
  {
    id: uuidv4(),
    author: USERS.bot,
    text: "Здесь вы можете оставить сообщение на любую интересующую вас тему.",
  },
];
export const BOT_MESSAGE = {
  id: "",
  author: USERS.bot,
  text: "Спасибо, что оставили сообщение!",
};
