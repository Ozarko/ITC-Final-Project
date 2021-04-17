import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AUTH_CLEAR_ERROR } from "../../../../redux/types/auth/authTypes";
import { link } from "../../../../routes/navigationLink";
import SeparatingLine from "../../../UI/SeparatingLine/SeparatingLine";
import Singnin from "../../../UI/Singnin/Singnin";
import LoginForm from "./LoginForm/LoginForm";
import SigninBtn from "../../../UI/Buttons/SigninBtn/SigninBtn";
import { GoogleLogin } from "react-google-login";
import { loginWithGoogle } from "../../../../redux/actions/auth/authAction";

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
    <Singnin title="Раді Вас бачити !">
      <div className="Login">
        <LoginForm />
        <SeparatingLine text="Або" />
        <SigninBtn signinType="Ввійти"/>
        <div className="Login-links">
          <Link to={link.forgotPassword}>
            <strong>Тут</strong> можна відновити пароль.{" "}
          </Link>
          <Link to={link.registration}>
            <strong>Зареєструйтесь</strong> у нас на сайті !
          </Link>
        </div>
      </div>
    </Singnin>
  );
};

export default Login;
