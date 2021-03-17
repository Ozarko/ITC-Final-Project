import React, { useState } from 'react';
import { FaTimes,FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { link } from '../../../routes/navigationLink';
import RectangleBtn from '../Buttons/RectangleBtn/RectangleBtn';

const Cart = () => {
  const [cartActive, setCartActive] = useState(false);

  const cartClases = ['Cart']

  if(cartActive) {
    cartClases.push('active')
  }

  const cartHandler = () => {
    setCartActive(false)
  }

  return (
    <div className={cartClases.join(' ')}>
      <div className='Cart-box'>
        <div className='Cart-box-title'>
          <div className='Cart-box-title-container'>
            <h5>Кошик <span>2</span></h5>
            <button onClick={()=> cartHandler()}><FaTimes/></button>
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
      </div>
    </div>
  )
}

export default Cart
