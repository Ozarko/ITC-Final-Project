import React, { useEffect } from 'react'
import Layout from '@UI/Layout/Layout'
import {mainRoutes} from '@routes/routes'
import { useLocation, withRouter } from 'react-router';
import { setColorTheme } from "./utilites/utilities";


const App = () => {
  const location = useLocation().pathname;

  useEffect(() => {
    if(location === '/') {
      setColorTheme('dark');
    }else {
      setColorTheme('light')
    }
    window.scrollTo(0, 0);
  }, [location])


  return <Layout>{mainRoutes}</Layout>;
}

export default withRouter(App)
