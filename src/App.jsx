import { useState, useEffect } from "react";
import { MessageList } from "./Components/MessageList";
import { MessageForm } from "./Components/MessageForm";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const INITIAL_MESSAGES = {
    id: uuidv4(),
    author: "бот",
    text: "Добро пожаловать в чат. Здесь вы можете оставить сообщение на любую интересующую вас тему.",
  };
  const BOT_MESSAGES = {
    id: uuidv4(),
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
      <header className="App-header">чат группы ReactJS 12.11</header>
      <main className="App-main">
        <MessageList messageList={messageList} />
        <MessageForm
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
