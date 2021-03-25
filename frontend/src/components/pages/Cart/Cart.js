import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { setCartStatus } from '../../../redux/actions/cart/cartActions';
import { link } from '../../../routes/navigationLink';
import RectangleBtn from '../../UI/Buttons/RectangleBtn/RectangleBtn';
import CartItem from './CartItem/CartItem';

const Cart = ({isOpen}) => {
  const dispatch = useDispatch()
  
  const {productInCart} = useSelector(state => state.cart)
  const {products} = useSelector(state => state.productList)
  
  const cartHandler = () => {
    dispatch(setCartStatus())
  }

  const clickBGHandler = (e) => {
    if(e.target.className === 'Cart enter-done') {
      dispatch(setCartStatus())
    }
  }

  return (
    <CSSTransition in={isOpen} timeout={50} mountOnEnter unmountOnExit>
      <div className="Cart" onClick={(e) => clickBGHandler(e)}>
        <div className="Cart-box">
          <div className="Cart-box-header">
            <h5>
              Кошик <span>{productInCart.length}</span>
            </h5>
            <button
              className="Cart-box-header-btn"
              onClick={() => cartHandler()}
            >
              <span className="Cart-box-header-btn-line" />
              <span className="Cart-box-header-btn-line" />
            </button>
          </div>
          <div className="Cart-box-body">
            {productInCart ? (
              <>
                <CartItem {...products[0]} />
                <CartItem {...products[0]} />
                <CartItem {...products[0]} />
                <CartItem {...products[0]} />
              </>
            ) : (
              <h2>Зробіть свій вибір</h2>
            )}
          </div>
          <div className="Cart-box-footer">
            <div className="Cart-box-footer-to-shopping">
              <Link to={link.shop}>
                <FaArrowLeft />
                <span>Назад до покупок</span>
              </Link>
            </div>
            <div className="Cart-box-footer-checkout">
              <div className="Cart-box-footer-checkout-subtotal">
                <h5>Разом: </h5>
                <h6>16$</h6>
              </div>
              <RectangleBtn
                buttonText="Придбати"
                clickHandler={() => console.log("clik")}
              />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Cart
