import React, { useEffect, useState } from "react";
import SiteTitleNav from "@UI/SiteTitleNav/SiteTitleNav";
import ShopCategories from "./ShopCategories/ShopCategories";
import ShopProducts from "./ShopProducts/ShopProducts";
import ShopTitle from "./ShopTitle/ShopTitle";
import ShopFilter from "./ShopFilter/ShopFilter";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../redux/actions/productList/productsAction";
import Loader from "../../UI/Loader/Loader";
import { loaderTimeOut } from "../../../config/siteConfig";

const Shop = () => {
  const dispatch = useDispatch();

  const { loading, products } = useSelector((state) => state.productList);

  const [loader, setLoading] = useState(true)

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLoading(false);
      }, loaderTimeOut);
    }
  }, [loading]);

    return (
      <>
        <Loader loading={loader} />
        {!loader && (
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
        )}
      </>
    );
};

export default Shop;
