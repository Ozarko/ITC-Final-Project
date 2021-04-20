import React from 'react'

const SeparatingLine = ({text}) => {
  return (
    <div className="SeparatingLine">
      <div className="SeparatingLine-line left"></div>
      <p>{text}</p>
      <div className="SeparatingLine-line right"></div>
    </div>
  );
}

export default SeparatingLine
