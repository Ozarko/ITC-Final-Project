import React from 'react'
import { Link } from 'react-router-dom'

const ShopBtn = ({to, text, styleType}) => {

  const styleClasses = ['ShopBtn']
  if(styleType) {
    styleClasses.push(styleType)
  }

  return (
    <button className={styleClasses.join(' ')}>
      <Link to={to}>{text}</Link>
    </button>
  )
}

export default ShopBtn
