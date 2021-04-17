import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { link } from '../../../../routes/navigationLink';
import SeparatingLine from '../../../UI/SeparatingLine/SeparatingLine';
import SunLogo from '../../../UI/SunLogo/SunLogo';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import { GiSunflower } from "react-icons/gi";
import Singnin from '../../../UI/Singnin/Singnin';

const ForgotPassword = ({history}) => {
    
    const { forgotReqSuccess } = useSelector((state) => state.resetPssw);
    const { isLogged } = useSelector((state) => state.auth);
    
    useState(()=>{
      if(isLogged) {
        history.push(link.main);
      }
    }, [isLogged])

    return (
      <Singnin motivation={true}>
        <div className="ForgotPassword">
          {forgotReqSuccess ? (
            <h2>{forgotReqSuccess}</h2>
          ) : (
            <>
              <h2>Забули пароль ? Ми вам допоможемо.</h2>
              <ForgotPasswordForm />
            </>
          )}
        </div>
      </Singnin>
    );
};

export default ForgotPassword;
