import React from 'react'
import { Link } from 'react-router-dom'

const LoginLink = () => {
  return (
    <div className="LoginLink">
      <div className="LoginLink-box">
        <Link to="/">Вхід</Link>
        <div className="LoginLink-box-line"></div>
      </div>
    </div>
  );
}

export default LoginLink
