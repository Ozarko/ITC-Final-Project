import React, { useState } from 'react'
import InputControl from '../../UI/InputControl/InputControl'
import SunLogo from '../../UI/SunLogo/SunLogo'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const submitHandler = () => {
    console.log('submit')
  }
  //   type, name, value, valueFromInput, valid, errorMessage;

  return (
    <div className="Login">
      <div className="container">
        <SunLogo />
        <h1>Раді вас бачити !</h1>
        <form onSubmit={() => submitHandler()} className="Login-form">
          <InputControl
            type="email"
            name="email"
            value={email}
            valueFromInput={setEmail}
            valid={true}
            errorMessage={""}
          />
          <InputControl
            type="password"
            name="password"
            value={email}
            valueFromInput={setPassword}
            valid={true}
            errorMessage={""}
          />
        </form>
      </div>
    </div>
  );
}

export default Login
