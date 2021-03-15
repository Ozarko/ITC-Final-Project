import React from 'react';
import SiteTitleNav from '../../UI/SiteTitleNav/SiteTitleNav';
import ShopCategories from './ShopCategories/ShopCategories';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopTitle from './ShopTitle/ShopTitle';
import products from '../../../products';
import ShopFilter from './ShopFilter/ShopFilter';

const Shop = () => {
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
