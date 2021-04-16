import SeparatingLine from '../../../UI/SeparatingLine/SeparatingLine'
import LoginForm from './LoginForm/LoginForm'

const Login = ({ toReg , showReg}) => {
  return (
    <div className="Login">
      <LoginForm />
      <button>
        <p>
          <strong>Тут</strong> можна відновити пароль.{" "}
        </p>
      </button>
      <SeparatingLine text="Або" />
      <button className="Login-toReg" onClick={() => toReg(!showReg)}>
        <p>
          <strong>Зареєструйтесь</strong> у нас на сайті !
        </p>
      </button>
    </div>
  );
};

export default Login
