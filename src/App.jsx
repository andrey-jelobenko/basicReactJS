import { useState, useEffect } from "react";
import { MessageList } from "./Components/MessageList";
import { MessageForm } from "./Components/MessageForm";
import "./App.css";

function App() {
  const INITIAL_MESSAGES = {
    author: "бот",
    text: "Добро пожаловать в чат группы ReactJS 12.11. Здесь вы можете оставить сообщение на любую интересующую вас тему.",
  };
  const BOT_MESSAGES = {
    author: "бот",
    text: "Спасибо, что оставили сообщение!",
  };
  const [messageList, setMessageList] = useState([INITIAL_MESSAGES]);

  useEffect(() => {
    let timer;
    if (messageList[messageList.length - 1].author !== "бот")
      timer = setTimeout(() => {
        setMessageList([...messageList, BOT_MESSAGES]);
      }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <MessageList messageList={messageList} />
        <MessageForm
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </header>
    </div>
  );
}

export default App;
