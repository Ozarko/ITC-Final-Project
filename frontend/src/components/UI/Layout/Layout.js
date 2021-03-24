import React, { useEffect } from 'react';
import { menuLinks } from '@routes/navigationLink';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Cursor from '../Cursor/Cursor';
import Cart from '../Cart/Cart';
import { routes } from '../../../routes/routes';
import {isMobile} from '../../../utilites/utilities'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../redux/actions/productsAction';
import Loader from '../Loader/Loader';

const Layout = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.download);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Loader loading={loading}/>
      <Navigation menuLinks={menuLinks} />
      <Cart />
      <main>{routes}</main>
      <Footer />
      {typeof navigator !== "undefined" && isMobile() ? null : <Cursor />}
    </>
  );
};

export default Layout
