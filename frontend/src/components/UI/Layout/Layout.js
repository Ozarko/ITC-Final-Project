import React from 'react';
import { menuLinks } from '@routes/navigationLink';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Cursor from '../Cursor/Cursor';
import Cart from '../Cart/Cart';

const Layout = (props) => {
  return (
    <div>
      <Cursor />
      <Navigation menuLinks={menuLinks} />
        <Cart />
        <main>{props.children}</main>
      <Footer/>
    </div>
  );
};

export default Layout
