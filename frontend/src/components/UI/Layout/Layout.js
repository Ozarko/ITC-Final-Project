import React, { useState } from 'react';
import { menuLinks } from '@routes/navigationLink';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Cursor from '../Cursor/Cursor';
import Cart from '../Cart/Cart';
import { routes } from '../../../routes/routes';
import {isMobile} from '../../../utilites/utilities'
import Loader from '../Loader/Loader';

const Layout = (props) => {
  const [load, setLoad] = useState(true);

  


  return (
    <>
      {typeof navigator !== "undefined" && isMobile() ? null : <Cursor />}
      <Loader loader={load} />
      <Navigation menuLinks={menuLinks} />
        <Cart />
        <main>{routes}</main>
      <Footer/>
    </>
  );
};

export default Layout
