import React from 'react'

const ShopTitle = ({ productLength }) => {
  return (
    <div className="ShopTitle">
      <div className="ShopTitle-title">
        <h2>Магазин</h2>
        <p>{productLength}</p>
      </div>
      <div className="ShopTitle-line"></div>
    </div>
  );
};

export default ShopTitle
