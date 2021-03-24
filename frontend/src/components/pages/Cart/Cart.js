import React from 'react';
import { FaTimes,FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { setCartStatus } from '../../../redux/actions/cart/cartActions';
import { link } from '../../../routes/navigationLink';
import RectangleBtn from '../../UI/Buttons/RectangleBtn/RectangleBtn';
import ProductCard from '../Shop/ShopProducts/ProductCard/ProductCard';

const Cart = ({isOpen}) => {
  const dispatch = useDispatch()
  
  const {productInCart} = useSelector(state => state.cart)

  const cartHandler = () => {
    dispatch(setCartStatus())
  }

  const clickBGHandler = (e) => {
    if(e.target.className === 'Cart enter-done') {
      dispatch(setCartStatus())
    }
  }

  return (
    <CSSTransition
      in={isOpen}
      timeout={50}
      mountOnEnter
      unmountOnExit
    >
      <div className='Cart' onClick={(e)=> clickBGHandler(e)}>
        <div className='Cart-box'>
          <div className='Cart-box-header'>
            <h5>Кошик <span>{productInCart.length}</span></h5>
            <button className="Cart-box-header-btn" onClick={()=> cartHandler()}>
              <span className="Cart-box-header-btn-line"/>
              <span className="Cart-box-header-btn-line"/>
            </button>
          </div>
          <div className="Cart-box-body">

          </div>
          <div className='Cart-box-footer'>
            
          </div>
        </div>
      {/* <div className='Cart-box'>
        <div className='Cart-box-title'>
          <div className='Cart-box-title-container'>
            <h5>Кошик <span>{productInCart.length}</span></h5>
          </div>
          <div className='Cart-box-line'></div>
        </div>
        <div className='Cart-box-item'>

        </div>
        <div className='Cart-box-exit'>
          <div className='Cart-box-exit-subtotal'>
            <p>Загальна сума</p>
            <p>1500 грн</p>
          </div>
          <div className='Cart-box-exit-btn'>
            <Link to={link.shop}><FaArrowLeft/> Повернутись до покупок</Link>
            <RectangleBtn buttonText={'Купити'} />
          </div>
        </div>
      </div> */}
      </div>      
    </CSSTransition>
  )
}

export default Cart
