import React from 'react'
import {outOfStock} from '../../../utilites/utilities';

const Quantity = ({title, count}) => {

  return (
    <div className="Quantity">
      {title ? <h6 className="Quantity-title">{title}</h6> : null}
      <button className="Quantity-decrement cursorHoverEffect" disabled={outOfStock(count)}>
        <span />
      </button>
      <p>{count}</p>
      <button className="Quantity-increment cursorHoverEffect" disabled={outOfStock(count)}>
        <span />
        <span className="increment" />
      </button>
    </div>
  );
}

export default Quantity
