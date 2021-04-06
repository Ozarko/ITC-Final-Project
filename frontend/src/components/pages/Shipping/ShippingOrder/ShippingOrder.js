import React from "react";
import CartItem from "../../Cart/CartItem/CartItem";

const ShippingOrder = ({ productInCart }) => {
  
  const subtotal = productInCart.reduce((acc, product) => {
    return acc += (product.qty * product.price ) 
  }, 0)

  return (
    <div className="ShippingOrder">
      <h3 className="ShippingOrder-title">Ваше замовлення</h3>
      <div className='ShippingOrder-cart'>
        {productInCart.map((product) => {
          return <CartItem key={`CartItem-${product.product}`} {...product} />;
        })}
      </div>
      <div className="ShippingOrder-total">
        <h5>Загальна сума</h5>
        <p>{subtotal} грн</p>
      </div>
    </div>
  );
};

export default ShippingOrder;
