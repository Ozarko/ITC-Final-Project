import React from 'react';
import SiteTitleNav from '../../UI/SiteTitleNav/SiteTitleNav';
import ShopCategories from './ShopCategories/ShopCategories';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopTitle from './ShopTitle/ShopTitle';

const Shop = () => {
  return (
    <section className="Shop">
      <div className="container">
        <SiteTitleNav />
        <ShopTitle/>
        <div className="Shop-box">
          <ShopCategories />
          <ShopProducts />
        </div>
      </div>
    </section>
  );
}

export default Shop;
