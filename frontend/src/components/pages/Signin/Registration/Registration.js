import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AUTH_CLEAR_ERROR } from "../../../../redux/types/auth/authTypes";
import { link } from "../../../../routes/navigationLink";
import SeparatingLine from "../../../UI/SeparatingLine/SeparatingLine";
import Singnin from "../../../UI/Singnin/Singnin";
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
    <Singnin title={isRegister ? null : "Раді Вас бачити !"}>
      <div className="Registration">
        {isRegister ? (
          <div className="Registration-success">
            <h4>
              Вам на пошту прийшов лист.
              <br /> Будь ласка, підтвердіть Ваш email !
            </h4>
          </div>
        ) : (
          <>
            <RegistrationForm />
            <SeparatingLine text="Або" />
            <Link to={link.login}>
              <p>
                <strong>Ввійти</strong> в профіль можна тут.
              </p>
            </Link>
          </>
        )}
      </div>
    </Singnin>
  );
};

export default Registration;
