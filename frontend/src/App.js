import React, { useEffect } from 'react'
import Layout from '@UI/Layout/Layout'
import {routes} from '@routes/routes'
import {useLocation, withRouter } from 'react-router';
import { setColorTheme } from "./utilites/utilities";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setColorTheme("dark");
    } else {
      setColorTheme("light");
    }
    window.scrollTo(0, 0);
  }, [location]);
  
  return <Layout>{routes}</Layout>;
}

export default withRouter(App)
