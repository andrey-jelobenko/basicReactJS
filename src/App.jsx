import "./App.css";
import { Message } from "./Message";

function App() {
  const text = "Компонент Message, отображающий переданный ему пропсом текст";
  return (
    <div className="App">
      <header className="App-header">
        <Message text={text} />
      </header>
    </div>
  );
}

export default App;
