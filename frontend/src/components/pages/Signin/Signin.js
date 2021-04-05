import React, { useState } from 'react'
import SeparatingLine from '../../UI/SeparatingLine/SeparatingLine';
import SunLogo from '../../UI/SunLogo/SunLogo';
import Login from './Login/Login';
import Registration from './Registration/Registration';

const Signin = () => {

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
