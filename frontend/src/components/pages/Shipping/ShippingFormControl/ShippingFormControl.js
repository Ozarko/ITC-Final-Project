import React, { useState } from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'

const ShippingFormControl = (props) => {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="ShippingFormControl">
      <div className="ShippingFormControl-header">
        <div className="ShippingFormControl-header-count">
          <h6>{props.count}</h6>
        </div>
        <h4 className="ShippingFormControl-header-title">{props.title}</h4>
        <button type='button' className="ShippingFormControl-header-btn" onClick={()=> setShowForm(!showForm)}>
          {showForm ? <AiOutlineDown /> : <AiOutlineUp />}
        </button>
      </div>
      <div className={ showForm ? "ShippingFormControl-body showForm" : "ShippingFormControl-body"}>
        {!showForm && <><h4>{props.subTitle}</h4> {props.children} </>}
      </div>
    </div>
  );
}

export default ShippingFormControl
