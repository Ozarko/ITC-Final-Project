import React from 'react'

const RectangleBtn = ({buttonText, clickHandler}) => {

  return <button onClick={() => clickHandler()} className="RectangleBtn">{buttonText}</button>;
}

export default RectangleBtn
