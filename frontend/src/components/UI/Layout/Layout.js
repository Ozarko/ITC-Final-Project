import React, { useEffect, useState } from 'react';
import { menuLinks } from '@routes/navigationLink';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Cursor from '../Cursor/Cursor';
import Cart from '../../pages/Cart/Cart';
import { routes } from '../../../routes/routes';
import {isMobile, themeStyle} from '../../../utilites/utilities'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Loader from '../Loader/Loader';

const Layout = () => {
  const [loading, setLoading] = useState(true);

  const { open } = useSelector((state) => state.cart);

  const location = useLocation();

  useEffect(() => {
    themeStyle(location);
    window.scrollTo(0, 0);
    setTimeout(()=> {
      setLoading(false);
    }, 2000)
  }, [location]);

  if (loading) {
    return <Loader loading={loading} />;
  } else {
    return (
      <>
        <Navigation menuLinks={menuLinks} />
        <Cart isOpen={open} />
        <main>{routes}</main>
        <Footer location={location.pathname} />
        {typeof navigator !== "undefined" && isMobile() ? null : <Cursor />}
      </>
    );
  }
};

export default Layout
