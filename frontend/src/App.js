import React, { useEffect } from 'react'
import Layout from '@UI/Layout/Layout'
import {routes} from '@routes/routes'
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from './redux/actions/auth/authAction';
import { AUTH_LOGIN_SUCCESS } from './redux/types/auth/authTypes';
import {fetchUser} from './redux/actions/user/userAction';

const App = () => {
  
  const dispatch = useDispatch()
  
  const firstLogin = localStorage.getItem("firstLogin");

  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (firstLogin) {
      dispatch(getAccessToken());
    }
  }, [dispatch, firstLogin]);

  useEffect(()=> {
    if(auth.token){
      dispatch({ type: AUTH_LOGIN_SUCCESS});
      dispatch(fetchUser(auth.token));
    }
  }, [auth.token, dispatch])

  return <Layout>{routes}</Layout>;
}

export default withRouter(App)