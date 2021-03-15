import React from 'react'
import RectangleBtn from '@UI/Buttons/RectangleBtn/RectangleBtn';
const ShopProducts = ({ products }) => {
  return (
    <div className="ShopProducts">
      <div className="ShopProducts-box">
        {products.map((product, index) => {
          return (
            <div key={`ShopProducts-${index}`} className="ShopProducts-box-card">
              <div className="ShopProducts-box-card-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <div className="ShopProducts-box-card-line"></div>
              <h5>{product.price} грн</h5>
              <RectangleBtn buttonText={"Купити"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopProducts
