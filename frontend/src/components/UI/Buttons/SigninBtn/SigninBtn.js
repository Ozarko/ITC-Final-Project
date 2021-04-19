import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginWithGoogle } from "../../../../redux/actions/auth/authAction";
import { link } from "../../../../routes/navigationLink";
import RectangleBtn from "../RectangleBtn/RectangleBtn";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const SigninBtn = ({ signinType }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const responseGoogle = (responce) => {
    dispatch(loginWithGoogle(responce));
    history.push(link.main);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="SigninBtn">
      <GoogleLogin
        render={(renderProps) => (
          <RectangleBtn
            buttonText={`${signinType} з Google`}
            disabledBtn={renderProps.disabled}
            clickHandler={renderProps.onClick}
          />
        )}
        clientId="957027866366-1n4h0fn2tv5gne56khht13a3ohcdsltr.apps.googleusercontent.com"
        buttonText={`${signinType} з Google`}
        onSuccess={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={false}
        fields="name,email"
        callback={responseFacebook}
        render={(renderProps) => (
          <RectangleBtn
            buttonText={`${signinType} з Facebook`}
            disabledBtn={false}
            clickHandler={renderProps.onClick}
          />
        )}
      />
    </div>
  );
};

export default SigninBtn;
