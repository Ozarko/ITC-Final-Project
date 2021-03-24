import React from 'react'

const Quantity = ({title, count,inStock ,clickHandler}) => {
  return (
    <div className="Quantity">
      {title ? <h6 className="Quantity-title">{title}</h6> : null}
      <button className="Quantity-decrement cursorHoverEffect Quantity-btn" onClick={()=> clickHandler(count - 1)} disabled={count <= 1}>
        <span />
      </button>
      <p>{count}</p>
      <button className="Quantity-increment cursorHoverEffect Quantity-btn" onClick={()=> clickHandler(count + 1)} disabled={count >= inStock}>
        <span />
        <span className="increment" />
      </button>
    </div>
  );
}

export default Quantity
