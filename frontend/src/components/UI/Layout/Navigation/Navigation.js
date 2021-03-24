import React, {useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CartButton from '../../Buttons/CartButton/CartButton';
import LoginLink from './LoginLink/LoginLink';
import Menu from './Menu/Menu';
import MenuLogo from './MenuLogo/MenuLogo';

const Navigation = () => {
  
  const [buttonActive, setButtonActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const location = useLocation().pathname;

  useEffect(()=> {
    setButtonActive(false);
    setMenuActive(false);
  },[location])

  const buttonStyle = buttonActive
    ? "Navigation-box-menuBtn-toggle active"
    : "Navigation-box-menuBtn-toggle";

  const menuToggleHandler = () => {
    setButtonActive(!buttonActive)
    setMenuActive(!menuActive)
  }

  return (
    <div className={"Navigation"}>
      <div className="container">
        <div className="Navigation-box">
          <MenuLogo />
          <Menu menuStatus={menuActive} />
          <div className="Navigation-box-loginCartLinkBox">
            <LoginLink />
            <CartButton />
          </div>
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
