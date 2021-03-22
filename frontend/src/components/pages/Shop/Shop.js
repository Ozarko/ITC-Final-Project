import React, {useEffect} from 'react';
import SiteTitleNav from '@UI/SiteTitleNav/SiteTitleNav';
import ShopCategories from './ShopCategories/ShopCategories';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopTitle from './ShopTitle/ShopTitle';
import ShopFilter from './ShopFilter/ShopFilter';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../redux/actions/productsAction';
import Loader from '../../UI/Loader/Loader';

const Shop = () => {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productListReducer);

  const { loading, error, products } = productList;

  useEffect(()=> {
    dispatch(listProducts())
  }, [dispatch])

  if(loading) {
    return <Loader/>
  }else if(error) {
    return <h2>error.massage</h2>
  }else {
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
}

export default Shop;
