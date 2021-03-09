import React from 'react'
import MenuLink from './MenuLink/MenuLink'

const Menu = ({menuStatus}) => {

  const styless = ['Menu']

  if(menuStatus) {
    styless.push('active')
  }

  return (
    <nav className={styless.join(' ')}>
      <ul className="Menu-list">
        <MenuLink />
      </ul>
    </nav>
  );
}
export default Menu