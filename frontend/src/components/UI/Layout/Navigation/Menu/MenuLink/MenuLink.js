import React from 'react'
import { NavLink } from 'react-router-dom';
import { menuLinks } from '@routes/navigationLink';

const MenuLink = () => {
  return menuLinks.map((link, index) => (
    <li className="MenuLink" key={`menuLink-${index}`}>
      <NavLink to={link.to} exact={link.exact} activeClassName="MenuLink active">
        {link.label}
      </NavLink>
      <div className="MenuLink-line"></div>
    </li>
  ));
}

export default MenuLink
