import React from 'react'
import { Link } from 'react-router-dom'

const ShopCategories = () => {
  return (
    <div className="ShopCategories">
      <ul>
        <li>
          <Link to='/shop/1'>Усі</Link>
          <div className="ShopCategories-line"></div>
        </li>
        <li>
          <Link to='/'>Шкарпетки</Link>
          <div className="ShopCategories-line"></div>
        </li>
        <li>
          <Link to='/shop'>Дитячий одяг</Link>
          <div className="ShopCategories-line"></div>
        </li>
        <li>
          <Link to='/shop'>В'язані вироби</Link>
          <div className="ShopCategories-line"></div>
        </li>
      </ul>
    </div>
  );
}

export default ShopCategories
