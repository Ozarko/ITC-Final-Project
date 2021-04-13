import { Redirect, Route, Switch } from "react-router-dom";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Contact/Contact";
import HomePage from "../components/pages/Home/HomePage";
import ProductScreen from "../components/pages/ProductScreen/ProductScreen";
import Shop from "../components/pages/Shop/Shop";
import { link } from "./navigationLink";
import Signin from "../components/pages/Signin/Signin";
import UserProfile from "../components/pages/UserProfile/UserProfile";
import Shipping from "../components/pages/Shipping/Shipping";
import ActivationEmail from "../components/pages/ActivationEmail/ActivationEmail";

export const routes = (
  <Switch>
    <Route path={link.main} component={HomePage} exact />
    <Route path={link.shop} component={Shop} exact />
    <Route path={link.productID} component={ProductScreen} />
    <Route path={link.about} component={About} exact />
    <Route path={link.contact} component={Contact} exact />
    <Route path={link.signin} component={Signin} exact />
    <Route path={link.profile} component={UserProfile} exact />
    <Route path={link.shipping} component={Shipping} exact />
    <Route
      path="/users/activate/:activation_token"
      component={ActivationEmail}
    />
    {/* <Redirect to={link.main} /> */}
  </Switch>
);
