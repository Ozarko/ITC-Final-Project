import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { link } from '../../../../../routes/navigationLink';

const LoginLink = () => {

  const {userInfo} = useSelector(state => state.userLogin)

  return (
    <div className="LoginLink">
      <div className="LoginLink-box">
        {userInfo ? (
          <Link to={link.profile}>{userInfo.name.split(' ')[0]}</Link>
        ) : (
          <Link to={link.signin}>Вхід</Link>
        )}
        <div className="LoginLink-box-line"></div>
      </div>
    </div>
  );
}

export default LoginLink
