import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const ShopFilter = () => {
  return (
    <div className="ShopFilter">
      <div className="ShopFilter-box">
        <div className="ShopFilter-box-filter hoverEffect">
          <p>Filter</p>
          <IoIosArrowDown />
        </div>
        <div className="ShopFilter-box-sort hoverEffect">
          <p>Sort by</p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="ShopFilter-line"></div>
    </div>
  );
}

export default ShopFilter
