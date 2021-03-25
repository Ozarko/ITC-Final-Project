import React from 'react'

const RectangleBtn = ({buttonText, clickHandler, disabledBtn}) => {
  return <button disabled={disabledBtn} onClick={() => clickHandler()} className="RectangleBtn">{buttonText}</button>;
}

export default RectangleBtn
