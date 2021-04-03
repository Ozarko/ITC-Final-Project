import React from 'react'
import Layout from '@UI/Layout/Layout'
import {routes} from '@routes/routes'
import {withRouter } from 'react-router';

const App = () => {
  return <Layout>{routes}</Layout>;
}

export default withRouter(App)