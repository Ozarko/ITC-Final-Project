import React from 'react';
import { menuLinks } from '@routes/navigationLink';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Cursor from '../Cursor/Cursor';
import Cart from '../Cart/Cart';
import { routes } from '../../../routes/routes';

const Layout = (props) => {
  return (
    <>
      <Cursor />
      <Navigation menuLinks={menuLinks} />
        <Cart />
        <main>{routes}</main>
      <Footer/>
    </>
  );
};

export default Layout
