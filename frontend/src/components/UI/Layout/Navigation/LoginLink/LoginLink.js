import React from 'react'
import { Link } from 'react-router-dom'
import { link } from '../../../../../routes/navigationLink';

const LoginLink = () => {
  return (
    <div className="LoginLink">
      <div className="LoginLink-box">
        <Link to={link.main}>Вхід</Link>
        <div className="LoginLink-box-line"></div>
      </div>
    </div>
  );
}

export default LoginLink
