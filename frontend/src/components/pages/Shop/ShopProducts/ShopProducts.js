import React from 'react'
import RectangleBtn from '@UI/Buttons/RectangleBtn/RectangleBtn';
import PageNavigator from '../PageNavigator/PageNavigator';
import {Link} from 'react-router-dom';
const ShopProducts = ({ products }) => {
  return (
    <div className="ShopProducts">
      <div className="ShopProducts-box">
        {products.map((product, index) => {
          return (
            <div
              key={`ShopProducts-${index}`}
              className="ShopProducts-box-card"
            >
              <Link to={`/shop/${product._id}`}>
                <div className="ShopProducts-box-card-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h4 className="ShopProducts-box-card-title">{product.name}</h4>
              </Link>
              <p>{product.description}</p>
              <div className="ShopProducts-box-card-line"></div>
              <h5>{product.price} грн</h5>
              <RectangleBtn buttonText={"Купити"} />
            </div>
          );
        })}
      </div>
      <PageNavigator />
    </div>
  );
};

export default ShopProducts
