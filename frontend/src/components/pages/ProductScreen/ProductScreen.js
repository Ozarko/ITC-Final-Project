import React from 'react'
import RectangleBtn from '../../UI/Buttons/RectangleBtn/RectangleBtn';
import SiteTitleNav from '../../UI/SiteTitleNav/SiteTitleNav';
import products from './../../../products';

const ProductScreen = ({match}) => {
  const product = products.find(product => product._id === match.params.id);

  return (
    <div className="ProductScreen">
      <div className="container">
        <SiteTitleNav name={product.name} />
        <div className="ProductScreen-box">
          <div className="ProductScreen-box-image">
            <img className='containImage' src={product.image} alt={product.name}/>
          </div>
          <div className="ProductScreen-box-info">
            <div className="ProductScreen-box-info-description">
              <h5>{product.categories}</h5>
              <h4>{product.name}</h4>
              <h5>{product.description}</h5>
              <h5>{product.price}</h5>
            </div>
            <div className="ProductScreen-box-info-add">
              <div className="ProductScreen-box-info-add-quantity">
                <button className="ProductScreen-box-info-add-quantity-minus">
                  -
                </button>
                <button className="ProductScreen-box-info-add-quantity-count">
                  1
                </button>
                <button className="ProductScreen-box-info-add-quantity-plus">
                  -
                </button>
              </div>
              <RectangleBtn buttonText={"В Кошик"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen
