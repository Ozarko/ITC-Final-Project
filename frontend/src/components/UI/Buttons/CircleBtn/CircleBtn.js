import React from 'react'
import { Link } from 'react-router-dom'

const CircleBtn = ({ text, styleType, linkType }) => {
  
  const styless = ["CircleBtn"];
  styless.push(styleType)

  let anchor = null;
  
  if (linkType.type === 'React') {
    anchor = <Link to={linkType.to}>{text}</Link>;
  }

  if (linkType.type === "Usual") {
    anchor = (
      <a href={linkType.url} rel="noreferrer" target="_blank">
        {text}
      </a>
    );
  }

  return (
    <button className={styless.join(" ")}>
      {anchor}
      <div className="CircleBtn-line"></div>
    </button>
  );
};

export default CircleBtn;
