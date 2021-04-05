import { Redirect, Route, Switch } from "react-router-dom";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Contact/Contact";
import HomePage from "../components/pages/Home/HomePage";
import ProductScreen from "../components/pages/ProductScreen/ProductScreen";
import Shop from "../components/pages/Shop/Shop";
import { link } from "./navigationLink";
import Signin from "../components/pages/Signin/Signin";
import UserProfile from "../components/pages/UserProfile/UserProfile";

export const routes = (
  <Switch>
    <Route path={link.main} component={HomePage} exact />
    <Route path={link.shop} component={Shop} />
    <Route path={link.productID} component={ProductScreen} />
    <Route path={link.about} component={About} />
    <Route path={link.contact} component={Contact} />
    <Route path={link.signin} component={Signin} />
    <Route path={link.profile} component={UserProfile} />
    <Redirect to={link.main} />
  </Switch>
);
