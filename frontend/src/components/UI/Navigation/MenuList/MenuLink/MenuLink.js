import React from 'react'
import { NavLink } from 'react-router-dom';
import { menuLinks } from '../../../../../routes/navigationLink';

const MenuLink = () => {
  return menuLinks.map((link, index)=> (
    <li key={`menuLink-${index}`}>
      <NavLink
        to={link.to}
        exact={link.exact}
        activeClassName='menuLinkActive'
      >
        {link.label}
      </NavLink>
    </li>
  ))
}

export default MenuLink
