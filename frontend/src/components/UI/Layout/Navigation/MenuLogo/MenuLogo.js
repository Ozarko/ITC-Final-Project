import React from 'react'
import { Link } from 'react-router-dom'
import { link } from '../../../../../routes/navigationLink';

const MenuLogo = () => {
  return (
    <div className="MenuLogo">
      <Link to={link.main}>
        SocksGlamour
      </Link>
    </div>
  );
}

export default MenuLogo
