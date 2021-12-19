import { v4 as uuidv4 } from "uuid";
import { USERS } from "../MessageList/constants";

export const INITIAL_MESSAGE = {
  id: {
    name: "",
    avatar: "",
    date: "Янв 9, 2014",
    messages: [
      {
        id: uuidv4(),
        text: "Выберите интересующий вас чат",
        author: USERS.BOT,
      },
    ],
  },
};

export const WELCOME_MESSAGE = [
  { id: uuidv4(), text: "Добро пожаловать в чат.", author: USERS.BOT },
  {
    id: uuidv4(),
    text: "Здесь вы можете оставить сообщение на любую интересующую вас тему.",
    author: USERS.BOT,
  },
];

export const INIT_CHATS = {
  [uuidv4()]: {
    name: "Фотографии",
    avatar: "Ph",
    date: "Янв 9, 2014",
    messages: WELCOME_MESSAGE,
  },
  [uuidv4()]: {
    name: "Работа",
    avatar: "Wo",
    date: "Фев 7, 2017",
    messages: WELCOME_MESSAGE,
  },
  [uuidv4()]: {
    name: "Вакансии",
    avatar: "Va",
    date: "Июнь 15, 2014",
    messages: WELCOME_MESSAGE,
  },
  [uuidv4()]: {
    name: "Путешествия",
    avatar: "Jo",
    date: "Сент 20, 2016",
    messages: WELCOME_MESSAGE,
  },
};
