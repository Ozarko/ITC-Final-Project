import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PageNavigator = () => {
  return (
    <div className="PageNavigator">
      <FaArrowLeft />
        <button className="PageNavigator-btn current hoverEffect">1</button>
        <button className="PageNavigator-btn  hoverEffect">2</button>
      <FaArrowRight />
    </div>
  );
}

export default PageNavigator
