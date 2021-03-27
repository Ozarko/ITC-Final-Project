import { Redirect, Route, Switch } from "react-router-dom";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Contact/Contact";
import HomePage from "../components/pages/Home/HomePage";
import Login from "../components/pages/Login/Login";
import ProductScreen from "../components/pages/ProductScreen/ProductScreen";
import Shop from "../components/pages/Shop/Shop";
import { link } from "./navigationLink";

export const routes = (
  <Switch >
    <Route path={link.main} component={HomePage} exact />
    <Route path={link.shop} component={Shop} />
    <Route  path={link.productID} component={ProductScreen}/>
    <Route path={link.about} component={About} />
    <Route path={link.contact} component={Contact} />
    <Route path={link.login} component={Login} />
    <Redirect to={link.main} />
  </Switch>
);
