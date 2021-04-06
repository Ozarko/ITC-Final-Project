import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { link } from '../../../routes/navigationLink';
import SeparatingLine from '../../UI/SeparatingLine/SeparatingLine';
import SunLogo from '../../UI/SunLogo/SunLogo';
import Login from './Login/Login';
import Registration from './Registration/Registration';

const Signin = ({location, history}) => {

  const {userInfo} = useSelector(state => state.userLogin)

  const redirect = location.search ? location.search.split('=')[1] : link.shop

  useEffect(()=> {
    if(userInfo) {
      history.push(redirect)
    }
  }, [history,  userInfo, redirect])

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
            <h3 className="Signin-box-signin ">
              Ввійти в акаунт можна 
              <button onClick={() => setShowRegister(!showRegister)}>
                тут.
              </button>{" "}
            </h3>
          ) : (
            <h3 className="Signin-box-signin ">
              <button onClick={() => setShowRegister(!showRegister)}>
                Зареєструйтесь
              </button>{" "}
              у нас на сайті !
            </h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default Signin
