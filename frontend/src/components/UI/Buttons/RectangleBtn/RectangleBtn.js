import React from 'react'

const RectangleBtn = ({buttonText, clickHandler, disabledBtn, btnType = 'button'}) => {
  return (
    <button
      type={btnType}
      disabled={disabledBtn}
      onClick={clickHandler ? clickHandler : null}
      className="RectangleBtn"
    >
      {buttonText}
    </button>
  );
}

export default RectangleBtn
