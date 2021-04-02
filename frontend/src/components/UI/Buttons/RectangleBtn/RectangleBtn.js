import React from 'react'

const RectangleBtn = ({buttonText, clickHandler, disabledBtn, btnType = 'button'}) => {
  return (
    <button
      type={btnType}
      disabled={disabledBtn}
      onClick={() => clickHandler()}
      className="RectangleBtn"
    >
      {buttonText}
    </button>
  );
}

export default RectangleBtn
