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
        author: USERS.bot,
      },
    ],
  },
};

export const INIT_CHATS = {
  id0: {
    name: "Чаты группы  GU_web_1558",
    avatar: "",
    date: "",
    messages: [
      {
        id: uuidv4(),
        text: "Выберите интересующий вас чат.",
        author: USERS.bot,
      },
      {
        id: uuidv4(),
        text: "Правила чата:",
        author: USERS.bot,
      },
    ],
  },
  id1: {
    name: "Фотографии",
    avatar: "Ph",
    date: "Янв 9, 2014",
    messages: [
      { id: uuidv4(), text: "Добро пожаловать в чат.", author: USERS.bot },
      {
        id: uuidv4(),
        text: "Здесь вы можете оставить сообщение на любую интересующую вас тему.",
        author: USERS.bot,
      },
    ],
  },
  id2: {
    name: "Работа",
    avatar: "Wo",
    date: "Фев 7, 2017",
    messages: [
      { id: uuidv4(), text: "Добро пожаловать в чат.", author: USERS.bot },
      {
        id: uuidv4(),
        text: "Здесь вы можете оставить сообщение на любую интересующую вас тему.",
        author: USERS.bot,
      },
    ],
  },
  id3: {
    name: "Вакансии",
    avatar: "Va",
    date: "Июнь 15, 2014",
    messages: [
      { id: uuidv4(), text: "Добро пожаловать в чат.", author: USERS.bot },
      {
        id: uuidv4(),
        text: "Здесь вы можете оставить сообщение на любую интересующую вас тему.",
        author: USERS.bot,
      },
    ],
  },
  id4: {
    name: "Путешествия",
    avatar: "Jo",
    date: "Сент 20, 2016",
    messages: [
      { id: uuidv4(), text: "Добро пожаловать в чат.", author: USERS.bot },
      {
        id: uuidv4(),
        text: "Здесь вы можете оставить сообщение на любую интересующую вас тему.",
        author: USERS.bot,
      },
    ],
  },
};
