import React from 'react';
import SiteTitleNav from '@UI/SiteTitleNav/SiteTitleNav';
import ShopCategories from './ShopCategories/ShopCategories';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopTitle from './ShopTitle/ShopTitle';
import ShopFilter from './ShopFilter/ShopFilter';
import { useSelector } from 'react-redux';

const Shop = () => {
  const {products} = useSelector((state) => state.productList);
    return (
      <section className="Shop">
        <div className="container">
          <SiteTitleNav />
          <ShopTitle productLength={products.length}/>
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
