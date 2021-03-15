import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PageNavigator = () => {
  return (
    <div className="PageNavigator">
      <button className="PageNavigator-arrow">
        <FaArrowLeft />
      </button>
      <button className="PageNavigator-btn current hoverEffect">1</button>
      <button className="PageNavigator-btn  hoverEffect">2</button>
      <button className="PageNavigator-arrow">
        <FaArrowRight />
      </button>
    </div>
  );
}

export default PageNavigator
