import React from 'react'
import { Link } from 'react-router-dom'

const ShopBtn = ({to, text, style}) => {

  const styleClasses = ['ShopBtn']
  if(style) {
    styleClasses.push(style)
  }

  return (
    <button className={styleClasses.join(' ')}>
      <Link to={to}>{text}</Link>
    </button>
  )
}

export default ShopBtn
