import React from 'react';
import { menuLinks } from '@routes/navigationLink';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Cursor from '../Cursor/Cursor';

const Layout = (props) => {
  return (
    <>
      <Cursor/>
      <Navigation
        menuLinks={menuLinks}
      />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout
