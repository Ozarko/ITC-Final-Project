import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { link } from "../../../../routes/navigationLink";
import Singnin from "../../../UI/Singnin/Singnin";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";
import SuccessReset from "./SuccessReset/SuccessReset";

const ResetPassword = ({ history }) => {

  const { isLogged } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogged) {
      history.push(link.shop);
    }
  }, [history, isLogged]);

  const { resetSuccess } = useSelector((state) => state.resetPssw);

  if (resetSuccess) {
    return <SuccessReset />;
  }

  return (
    <Singnin text="Ваш пароль було скинуто !" motivation={true}>
      <div className="ResetPassword">
        <h2>Будь ласка, введіть новий пароль.</h2>
        <ResetPasswordForm />
      </div>
    </Singnin>
  );
};

export default ResetPassword;
