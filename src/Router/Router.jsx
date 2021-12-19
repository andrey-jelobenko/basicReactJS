import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ChatList } from "../Components/ChatList";
import { Chats } from "../Screens/Chats";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { ROUTES } from "./constants";
import { Header } from "./Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.CHATS} render={() => <Chats />}></Route>
        <Route path={ROUTES.NO_CHAT}>
          <ChatList />
        </Route>
        <Route path={ROUTES.PROFILE} component={Profile}></Route>
        <Route path={ROUTES.NOT_FOUND}>Not found</Route>
        <Route>
          <Redirect to={ROUTES.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
