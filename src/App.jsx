import { Provider } from "react-redux";
import { Router } from "./Router";
import { store } from "./Store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
