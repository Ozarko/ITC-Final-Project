import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { link } from '../../../../../routes/navigationLink';

const LoginLink = () => {

  const {isLogged, userInfo} = useSelector(state => state.user)

  return (
    <div className="LoginLink">
      <div className="LoginLink-box">
        {isLogged ? (
          <Link to={link.profile}>Log</Link>
        ) : (
          <Link to={link.signin}>Вхід</Link>
        )}
        <div className="LoginLink-box-line"></div>
      </div>
    </div>
  );
}

export default LoginLink
