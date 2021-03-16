import React from "react";
import PageNavigator from "../PageNavigator/PageNavigator";
import ProductCard from "./ProductCard/ProductCard";

const ShopProducts = ({ products }) => {
  return (
    <div className="ShopProducts">
      <div className="ShopProducts-container">
        {products.map((product, index) => (
          <ProductCard key={`ShopProduct-${index}`} product={product} index={index} />
        ))}
      </div>
      <PageNavigator />
    </div>
  );
};

export default ShopProducts;
