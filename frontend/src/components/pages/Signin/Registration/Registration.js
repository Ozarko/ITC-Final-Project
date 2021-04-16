import React from 'react'
import { useSelector } from 'react-redux';
import SeparatingLine from '../../../UI/SeparatingLine/SeparatingLine'
import RegistrationForm from './RegistrationForm/RegistrationForm'

const Registration = ({ toLog, showReg }) => {

  const {isRegister} = useSelector(state => state.auth);

  return (
    <div className="Registration">
      {isRegister ? (
        <div className="Registration-success">
          <h4>Вам на пошту прийшов лист. Будь ласка підтвердіть ваш email !</h4>
        </div>
      ) : (
        <>
          <RegistrationForm />
          <SeparatingLine text="Або" />
          <button
            className="Registration-toLog"
            onClick={() => toLog(!showReg)}
          >
            <p>
              <strong>Ввійти</strong> в акаунт можна тут.
            </p>
          </button>
        </>
      )}
    </div>
  );
};

export default Registration
