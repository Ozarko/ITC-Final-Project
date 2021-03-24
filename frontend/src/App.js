import React, { useEffect } from 'react'
import Layout from '@UI/Layout/Layout'
import {routes} from '@routes/routes'
import {useLocation, withRouter } from 'react-router';
import { themeStyle } from "./utilites/utilities";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    themeStyle(location);
    window.scrollTo(0, 0);
  }, [location]);

  return <Layout>{routes}</Layout>;
}

export default withRouter(App)
