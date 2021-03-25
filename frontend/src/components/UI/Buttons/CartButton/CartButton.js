import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartStatus } from "../../../../redux/actions/cart/cartActions";

const CartButton = () => {
  const dispatch = useDispatch();
  
  const showCart = () => {
    dispatch(setCartStatus());
  };
  
  const {productInCart} = useSelector(state => state.cart)


  return (
    <div className="CartButton">
      <div className="CartButton-box">
        <button onClick={() => showCart()}>
          <span>Кошик</span> <span className="CartButton-box-count">{productInCart.length}</span>
        </button>
        <div className="CartButton-box-line"></div>
      </div>
    </div>
  );
};

export default CartButton;
