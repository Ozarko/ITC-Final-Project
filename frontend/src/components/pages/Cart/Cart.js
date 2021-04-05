import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { setCartStatus } from '../../../redux/actions/cart/cartActions';
import { link } from '../../../routes/navigationLink';
import RectangleBtn from '../../UI/Buttons/RectangleBtn/RectangleBtn';
import CartItem from './CartItem/CartItem';

const Cart = ({history, isOpen}) => {


  const dispatch = useDispatch()
  
  const {productInCart} = useSelector(state => state.cart)

  const cartHandler = () => {
    dispatch(setCartStatus())
  }

  const subtotal = productInCart.reduce((acc, product) => {
    return acc += (product.qty * product.price ) 
  }, 0)

  const clickBGHandler = (e) => {
    if(e.target.className === 'Cart enter-done') {
      dispatch(setCartStatus())
    }
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
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
            {productInCart.length !== 0 ? (
              <>
                {productInCart.map((product) => {
                  return (
                    <CartItem
                      key={`CartItem-${product.product}`}
                      {...product}
                    />
                  );
                })}
              </>
            ) : (
              <p className="Cart-box-body-empty">
                Ваша корзина пуста. <br/> Огортаючи ніжки пухнастими шкарпеточками, ви
                отримуєте тепло. Додайте каву та шоколад. Разом - це спокій та
                щастя !
              </p>
            )}
          </div>
          <div className="Cart-box-footer">
            <div className="Cart-box-footer-to-shopping">
              <Link to={link.shop} onClick={() => cartHandler()}>
                <FaArrowLeft />
                <span>Назад до покупок</span>
              </Link>
            </div>
            <div className="Cart-box-footer-checkout">
              <div className="Cart-box-footer-checkout-subtotal">
                <h5>Разом: </h5>
                <h6>{subtotal} грн</h6>
              </div>
              <RectangleBtn
                buttonText="Придбати"
                clickHandler={() => checkoutHandler}
                disabledBtn={productInCart.length === 0 ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default withRouter(Cart)
