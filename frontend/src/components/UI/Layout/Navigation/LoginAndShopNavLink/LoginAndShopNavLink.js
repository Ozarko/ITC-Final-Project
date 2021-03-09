import React from 'react'
import { Link } from 'react-router-dom';

const LoginAndShopNavLink = () => {
  return (
    <div className="LoginAndShopNavLink">
      <div className="LoginAndShopNavLink-login">
        <p>Ввійти</p>
        <div className="LoginAndShopNavLink-login-line"></div>
      </div>
      <div className="LoginAndShopNavLink-shop">
        <div className="LoginAndShopNavLink-shop-box">
          <Link to="/shop">Магазин</Link>
          <div className="LoginAndShopNavLink-shop-box-line"></div>
        </div>
        <div className="LoginAndShopNavLink-shop-count">10</div>
      </div>
    </div>
  );
}

export default LoginAndShopNavLink
