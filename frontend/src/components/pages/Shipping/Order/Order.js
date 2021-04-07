import React from "react";
import CartItem from "../../../UI/CartItem/CartItem";

const Order = ({ productInCart }) => {
  
  const subtotal = productInCart.reduce((acc, product) => {
    return acc += (product.qty * product.price ) 
  }, 0)

  return (
    <div className="Order darkTheme">
      <h3 className="Order-title">Ваше замовлення</h3>
      <div className='Order-cart'>
        {productInCart.map((product) => {
          return <CartItem key={`CartItem-${product.product}`} {...product} />;
        })}
      </div>
      <div className="Order-total">
        <h5>Загальна сума</h5>
        <p>{subtotal} грн</p>
      </div>
    </div>
  );
};

export default Order;
