import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_CLEAR_ERROR } from '../../../redux/types/auth/authTypes';
import { link } from '../../../routes/navigationLink';
import SunLogo from '../../UI/SunLogo/SunLogo';
import Login from './Login/Login';
import Registration from './Registration/Registration';

const Signin = ({location, history}) => {

  const dispatch = useDispatch();

  const {isLogged} = useSelector(state => state.auth)

  const redirect = location.search ? location.search.split('=')[1] : link.shop

  const [showRegister, setShowRegister] = useState(false);

  useEffect(()=> {
    if(isLogged) {
      history.push(redirect)
    }
  }, [history,  isLogged, redirect])

  useEffect(()=>{
    dispatch({type: AUTH_CLEAR_ERROR})
  }, [showRegister])

  return (
    <section className="Signin">
      <div className="container">
        <SunLogo />
        <div className="Signin-box">
          <h2 className="Signin-box-title">Раді вас бачити !</h2>
          {showRegister ? (
            <Registration toLog={setShowRegister} showReg={showRegister} />
          ) : (
            <Login toReg={setShowRegister} showReg={showRegister} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Signin
