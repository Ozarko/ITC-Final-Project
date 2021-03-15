import React from 'react'
import { Link } from 'react-router-dom'

const ShopCategories = () => {
  return (
    <div className="ShopCategories">
      <ul>
        <li>
          <Link to='/shop'>Усі</Link>
          <div className="ShopCategories-line"></div>
        </li>
        <li>
          <Link to='/shop'>Шкарпетки</Link>
          <div className="ShopCategories-line"></div>
        </li>
        <li>
          <Link to='/shop'>Одяг для дітей</Link>
          <div className="ShopCategories-line"></div>
        </li>
        <li>
          <Link to='/shop'>Ще щось там</Link>
          <div className="ShopCategories-line"></div>
        </li>
      </ul>
    </div>
  );
}

export default ShopCategories
