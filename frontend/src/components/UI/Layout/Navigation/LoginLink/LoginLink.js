import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { link } from '../../../../../routes/navigationLink';

const LoginLink = () => {

  const {isLogged} = useSelector(state => state.auth)
  const {user} = useSelector(state => state.user)

  return (
    <div className="LoginLink">
      <div className="LoginLink-box">
        {user.isAdmin ? 
          <Link to={link.admin}>SocksGlamour</Link>
        : isLogged ? (
          <Link to={link.profile}>{user.firstName}</Link>
        ) : (
          <Link to={link.login}>Вхід</Link>
        )}
        <div className="LoginLink-box-line"></div>
      </div>
    </div>
  );
}

export default LoginLink
