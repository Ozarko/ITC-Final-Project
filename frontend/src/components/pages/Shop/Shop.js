import React, { useEffect } from 'react';
import SiteTitleNav from '@UI/SiteTitleNav/SiteTitleNav';
import ShopCategories from './ShopCategories/ShopCategories';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopTitle from './ShopTitle/ShopTitle';
import ShopFilter from './ShopFilter/ShopFilter';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../redux/actions/productList/productsAction';
import Loader from '../../UI/Loader/Loader';
import { ErrorMessage } from 'formik';

const Shop = () => {
  const dispatch = useDispatch();

  const {loading, error, products} = useSelector(state => state.productList)

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  if(loading) {
    return <Loader loading={loading}/>
  }else if(error) {
    return <ErrorMessage />
  }else {
    return (
      <section className="Shop">
        <div className="container">
          <SiteTitleNav />
          <ShopTitle productLength={products.length} />
          <div className="Shop-box">
            <ShopCategories />
            <div className="Shop-box-products">
              <ShopFilter />
              <ShopProducts products={products} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Shop;
