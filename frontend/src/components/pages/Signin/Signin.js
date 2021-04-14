import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { link } from '../../../routes/navigationLink';
import SeparatingLine from '../../UI/SeparatingLine/SeparatingLine';
import SunLogo from '../../UI/SunLogo/SunLogo';
import Login from './Login/Login';
import Registration from './Registration/Registration';

const Signin = ({location, history}) => {

  const {isLogged} = useSelector(state => state.auth)

  const redirect = location.search ? location.search.split('=')[1] : link.shop

  useEffect(()=> {
    if(isLogged) {
      history.push(redirect)
    }
  }, [history,  isLogged, redirect])

  const [showRegister, setShowRegister] = useState(false)

  return (
    <section className="Signin">
    <div className="container">
      <SunLogo />
      <div className="Signin-box">
        <h2 className="Signin-box-title">Раді вас бачити !</h2>
        {showRegister ? <Registration /> : <Login />}
        <SeparatingLine />
        {showRegister ? (
            <button className="Signin-box-signin" onClick={() => setShowRegister(!showRegister)}>
            <p><strong>Ввійти</strong> в акаунт можна тут. </p>
            </button>
        ) : (
            <button className="Signin-box-signin" onClick={() => setShowRegister(!showRegister)}>
              <p><strong>Зареєструйтесь</strong> у нас на сайті !</p>
            </button>
        )}
      </div>
    </div>
  </section>
  );
}

export default Signin
