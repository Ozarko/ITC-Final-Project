import React, { useEffect } from 'react'
import Layout from '@UI/Layout/Layout'
import {routes} from '@routes/routes'
import {useLocation, withRouter } from 'react-router';
import { themeStyle } from "./utilites/utilities";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './redux/actions/productsAction';
import Loader from './components/UI/Loader/Loader';


const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.productListReducer);
  
  useEffect(()=> {
    dispatch(listProducts());
  }, [dispatch])

  useEffect(() => {
    themeStyle(location);
    window.scrollTo(0, 0);
  }, [location]);

  if(loading) {
    return <Loader loading={loading}/>;
  }else if(error){
    return <h2>error.message</h2>
  }else {
    return <Layout>{routes}</Layout>;
  }
}

export default withRouter(App)
