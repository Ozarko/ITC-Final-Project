import React, { useEffect } from 'react';
import { menuLinks } from '@routes/navigationLink';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import Cursor from '../Cursor/Cursor';
import Cart from '../../pages/Cart/Cart';
import { routes } from '../../../routes/routes';
import {isMobile} from '../../../utilites/utilities'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../redux/actions/productList/productsAction';
import Loader from '../Loader/Loader';
import Message from '../../pages/Message/Message';

const Layout = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.download);
  const {open} = useSelector(state => state.cart)
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Loader loading={loading}/>
      {error 
        ? <Message message={error.message} />
        : <>
            <Navigation menuLinks={menuLinks} />
            <Cart isOpen={open} />
            <main>{routes}</main>
            <Footer />
            <Cursor />
            {/* {typeof navigator !== "undefined" && isMobile() ? null : <Cursor />} */}
          </>
      }
    </>
  );
};

export default Layout
