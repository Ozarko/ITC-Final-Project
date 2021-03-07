import { Redirect, Route, Switch } from "react-router-dom";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Contact/Contact";
import HomePage from "../components/pages/Home/HomePage";



export const mainRoutes = (
  <Switch>
    <Route exact path={"/"} component={HomePage} />
    <Route path={"/about"} component={About} />
    <Route path={"/contacts"} component={Contact} />
    <Redirect to={""} />
  </Switch>
);