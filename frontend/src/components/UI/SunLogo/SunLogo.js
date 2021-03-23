import React from "react";
import { GiSunflower } from "react-icons/gi";

const SunLogo = (text) => {
  return (
    <div className="SunLogo cursorHoverEffect">
      <GiSunflower />
      <h3 className="SunLogo-header">HANDMADE</h3>
    </div>
  );
};

export default SunLogo;
