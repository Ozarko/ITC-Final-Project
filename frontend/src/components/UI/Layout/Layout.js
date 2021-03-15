import React from 'react';
import { menuLinks } from '@routes/navigationLink';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Cursor from '../Cursor/Cursor';
import { withRouter } from 'react-router';

const Layout = ({ children }) => {
  return (
    <>
      <Cursor />
      <Navigation menuLinks={menuLinks} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default withRouter(Layout)
