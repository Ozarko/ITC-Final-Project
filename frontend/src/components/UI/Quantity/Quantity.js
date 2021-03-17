import React from 'react'

const Quantity = ({title, count}) => {
  return (
    <div className="Quantity">
      {title ? <h6 className="Quantity-title">{title}</h6> : null}
      <button className="Quantity-decrement cursorHoverEffect">
        <span />
      </button>
      <p>{count}</p>
      <button className="Quantity-increment cursorHoverEffect">
        <span />
        <span className="increment" />
      </button>
    </div>
  );
}

export default Quantity
