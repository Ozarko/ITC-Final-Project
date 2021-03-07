import React from 'react'
import { Link } from 'react-router-dom'

const MainLinkButton = ({ text, styleType, linkType }) => {
  
  const styless = ["MainLinkButton"];
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
      <div className="MainLinkButton-line"></div>
    </button>
  );
};

export default MainLinkButton;
