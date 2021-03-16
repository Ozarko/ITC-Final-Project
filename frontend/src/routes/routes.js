import { Redirect, Route, Switch } from "react-router-dom";
import About from "../components/pages/About/About";
import Contact from "../components/pages/Contact/Contact";
import HomePage from "../components/pages/Home/HomePage";
import ProductScreen from "../components/pages/ProductScreen/ProductScreen";
import Shop from "../components/pages/Shop/Shop";

export let routes = (
  <Switch>
    <Route path={"/"} component={HomePage} exact />
    <Route path={"/shop"} component={Shop} />
    <Route  path={"/product/:id"} component={ProductScreen}/>
    <Route path={"/about"} component={About} />
    <Route path={"/contacts"} component={Contact} />
    <Redirect to={"/"} />
  </Switch>
);