import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AUTH_CLEAR_ERROR } from "../../../../redux/types/auth/authTypes";
import { link } from "../../../../routes/navigationLink";
import SeparatingLine from "../../../UI/SeparatingLine/SeparatingLine";
import SunLogo from "../../../UI/SunLogo/SunLogo";
import LoginForm from "./LoginForm/LoginForm";

const Login = ({location, history}) => {
  const dispatch = useDispatch()

  const {isLogged} = useSelector(state => state.auth);

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
          <div className="Login">
            <LoginForm />
            <SeparatingLine text="Або" />
            <div className='Login-links'>
              <Link to={link.resetPassword}>
                  <strong>Тут</strong> можна відновити пароль.{" "}
              </Link>
              <Link to={link.registration}>
                  <strong>Зареєструйтесь</strong> у нас на сайті !
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
