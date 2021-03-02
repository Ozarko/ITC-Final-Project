import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../components/pages/Home/HomePage";



export const mainRoutes = (
  <Switch>
    <Route exact path={"/"} component={HomePage} />
    <Redirect to={""} />
  </Switch>
);