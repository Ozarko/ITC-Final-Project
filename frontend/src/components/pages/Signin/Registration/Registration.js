import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AUTH_CLEAR_ERROR } from "../../../../redux/types/auth/authTypes";
import { link } from "../../../../routes/navigationLink";
import SeparatingLine from "../../../UI/SeparatingLine/SeparatingLine";
import SunLogo from "../../../UI/SunLogo/SunLogo";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

const Registration = ({location, history}) => {

  const dispatch = useDispatch()

  const { isRegister, isLogged } = useSelector((state) => state.auth);

  const redirect = location.search ? location.search.split('=')[1] : link.shop

  useEffect(()=> {
    if(isLogged) {
      history.push(redirect)
    }
  }, [history,  isLogged, redirect])

  useEffect(()=>{
    dispatch({type: AUTH_CLEAR_ERROR})
  }, [location, dispatch])

  return (
    <section className="Signin">
      <div className="container">
        <SunLogo />
        <div className="Signin-box">
          <h2 className="Signin-box-title">Раді вас бачити !</h2>
          <div className="Registration">
            {isRegister ? (
              <div className="Registration-success">
                <h4>
                  Вам на пошту прийшов лист. Будь ласка підтвердіть ваш email !
                </h4>
              </div>
            ) : (
              <>
                <RegistrationForm />
                <SeparatingLine text="Або" />
                <Link to={link.login}>
                    Ввійти до акаунт можна тут.
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
