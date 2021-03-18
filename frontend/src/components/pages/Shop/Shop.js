import React, {useEffect, useState} from 'react';
import SiteTitleNav from '@UI/SiteTitleNav/SiteTitleNav';
import ShopCategories from './ShopCategories/ShopCategories';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopTitle from './ShopTitle/ShopTitle';
import ShopFilter from './ShopFilter/ShopFilter';
import axios from 'axios';

const Shop = () => {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts();
  }, [])

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
