import React, { useState } from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'

const ShippingFormControl = (props) => {

  const [showForm, setShowForm] = useState(true)

  const showFormHandler = () => {
    setShowForm(!showForm)
  }

  return (
    <div className='ShippingFormControl'>
      <div className='ShippingFormControl-header'>
        <h6 className='ShippingFormControl-header-count'>{props.count}</h6>
        <h4 className='ShippingFormControl-header-title'>{props.title}</h4>
        <button onClick={()=> showFormHandler()}>{showForm ? <AiOutlineDown/>: <AiOutlineUp/>}</button>
      </div>
      <div className={showForm ? 'ShippingFormControl-body showForm': 'ShippingFormControl-body'}>
        <h4>{props.subTitle}</h4>
        {props.children}
      </div>
    </div>
  )
}

export default ShippingFormControl
