import React from 'react';
import MenuList from './MenuList/MenuList';
import MenuLogo from './MenuLogo/MenuLogo';

const Navigation = () => {
  return (
    <div className="Navigation">
      <MenuLogo />
      <nav className="Navigation">
        <div className="container">
          <MenuList />
        </div>
      </nav>
    </div>
  );
}

export default Navigation
