import React from 'react';
import SiteTitleNav from '@UI/SiteTitleNav/SiteTitleNav';
import ShopCategories from './ShopCategories/ShopCategories';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopTitle from './ShopTitle/ShopTitle';
import ShopFilter from './ShopFilter/ShopFilter';
import { useSelector } from 'react-redux';
import Loader from '../../UI/Loader/Loader';

const Shop = () => {
  const productList = useSelector((state) => state.productListReducer);
  
  const { loading, error, products } = productList;
  console.log(products)
    return (
      <section className="Shop">
        <div className="container">
          <SiteTitleNav />
          <ShopTitle />
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

export default Shop;
