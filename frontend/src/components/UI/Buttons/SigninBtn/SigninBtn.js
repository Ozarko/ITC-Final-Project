import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginWithGoogle } from "../../../../redux/actions/auth/authAction";
import { link } from "../../../../routes/navigationLink";
import RectangleBtn from "../RectangleBtn/RectangleBtn";

const SigninBtn = ({ signinType }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const responseGoogle = (responce) => {
    dispatch(loginWithGoogle(responce));
    history.push(link.main);
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
    </div>
  );
};

export default SigninBtn;
