import React from 'react'
import { Link } from 'react-router-dom'

const CartLink = () => {
  return (
    <div className="CartLink">
      <div className="CartLink-box">
        <Link to="/">
          <span>Кошик</span> <span className="CartLink-box-count">10</span>
        </Link>
        <div className="CartLink-box-line"></div>
      </div>
    </div>
  );
}

export default CartLink
