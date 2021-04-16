import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { activateEmail } from "../../../../redux/actions/auth/authAction";
import FrameImage from "../../../UI/FrameImage/FrameImage";
import activationImage from "../../../../image/activation/activationEmail.jpg";
import SunLogo from "../../../UI/SunLogo/SunLogo";
import RectangleBtn from "../../../UI/Buttons/RectangleBtn/RectangleBtn";
import { link } from "../../../../routes/navigationLink";

const ActivationEmail = ({ history }) => {
  const dispatch = useDispatch();

  const { activation_token } = useParams();

  useEffect(() => {
    if (activation_token) {
      dispatch(activateEmail(activation_token));
    }
  }, [activation_token]);

  const pushToShop = () => {
    history.push(link.shop);
  };

  return (
    <section className="ActivationEmail container">
      <div className="ActivationEmail-box">
        <div className="ActivationEmail-box-body">
          <SunLogo />
          <div className="ActivationEmail-box-body-msg">
            <h4>Ваша активація пройшла успішно.</h4>
            <p>
              Щасливу людину дуже просто впізнати. Вона ніби випромінює ауру
              спокою і тепла. Секрет щасливих людей простий - це відсутність
              напруги. Це задоволення собою. Огортаючи ніжки пухнастими
              шкарпеточками, ви отримуєте теало. Додайте каву та шоколад. Разом
              - це спокій та щастя{" "}
            </p>
          </div>
          <RectangleBtn
            buttonText="В магазин"
            disabledBtn={false}
            clickHandler={pushToShop}
          />
        </div>
        <FrameImage image={activationImage} alt="Активація була успішна" />
      </div>
    </section>
  );
};

export default ActivationEmail;
