import React, {useState } from 'react';
import { useLocation } from 'react-router';
import LoginAndShopNavLink from './LoginAndShopNavLink/LoginAndShopNavLink';
import Menu from './Menu/Menu';
import MenuLogo from './MenuLogo/MenuLogo';

const Navigation = () => {

  const location = useLocation();
  const navigationStyle = ['Navigation']
  if(location.pathname === '/sc') {
    console.log(location.pathname)
    navigationStyle.push('mainPage')
  }

  const [buttonActive, setButtonActive] = useState(false)

  const buttonStyle = buttonActive
    ? "Navigation-box-menuBtn-toggle active"
    : "Navigation-box-menuBtn-toggle";

  const menuToggleHandler = () => {
    setButtonActive(!buttonActive)
  }

  return (
    <div className={navigationStyle.join(' ')}>
      <div className="container">
        <div className="Navigation-box">
          <MenuLogo />
          <Menu />
          <LoginAndShopNavLink />
          <div className="Navigation-box-menuBtn">
            <button onClick={menuToggleHandler} className={buttonStyle}>
              <div className="Navigation-box-menuBtn-toggle-menu half start"></div>
              <div className="Navigation-box-menuBtn-toggle-menu"></div>
              <div className="Navigation-box-menuBtn-toggle-menu half end"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation
