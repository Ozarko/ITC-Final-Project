import React from 'react'
import { link } from '../../../../../routes/navigationLink'
import RectangleBtn from '../../../../UI/Buttons/RectangleBtn/RectangleBtn'
import FrameBoxImage from '../../../../UI/FrameBoxImage/FrameBoxImage';
import successResetImage from "../../../../../image/successReset/successReset.jpg";
import SunLogo from '../../../../UI/SunLogo/SunLogo';
import SeparatingLine from '../../../../UI/SeparatingLine/SeparatingLine';
import { GiSunflower } from "react-icons/gi";
import { useHistory, withRouter } from 'react-router';

const SuccessReset = () => {
  
  const history = useHistory()

  const toLogin = () => {
    history.push(link.login)
  }

  return (
    <section className="SuccessReset container">
      <SunLogo />
      <div className="SuccessReset-box">
        <div className="SuccessReset-box-body">
          <h3>Ваш пароль було успішно змінено !</h3>
          <SeparatingLine text={<GiSunflower />} />
          <p>
            Щасливу людину дуже просто впізнати. Вона ніби випромінює ауру
            спокою і тепла. Секрет щасливих людей простий - це відсутність
            напруги. Це задоволення собою. Огортаючи ніжки пухнастими
            шкарпеточками, ви отримуєте тепло. Додайте каву та шоколад. Разом -
            це спокій та щастя{" "}
          </p>
          <RectangleBtn
            buttonText="Ввійти в акаунт"
            disabledBtn={false}
            clickHandler={() => toLogin()}
          />
        </div>
        <div className="SuccessReset-box-image">
          <FrameBoxImage
            frameBoxImage={successResetImage}
            frameBoxAlt="Картинка до пароль змінено"
          />
        </div>
      </div>
    </section>
  );
}

export default withRouter(SuccessReset);
