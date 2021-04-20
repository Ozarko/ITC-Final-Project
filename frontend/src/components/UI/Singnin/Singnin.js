import React from "react";
import { GiSunflower } from "react-icons/gi";
import SeparatingLine from "../SeparatingLine/SeparatingLine";
import SunLogo from "../SunLogo/SunLogo";

const Singnin = ({ title, children, motivation }) => {
  return (
    <section className="Signin">
      <div className="container">
        <SunLogo />
        <div className="Signin-box">
          {title && <h2 className="Signin-box-title">{title}</h2>}
          {children}
        </div>
        {motivation && (
          <div className="Signin-motivation">
            <SeparatingLine text={<GiSunflower />} />
            <p>
              Щасливу людину дуже просто впізнати. Вона ніби випромінює ауру
              спокою і тепла. Секрет щасливих людей простий - це відсутність
              напруги. Це задоволення собою. Огортаючи ніжки пухнастими
              шкарпеточками, ви отримуєте тепло. Додайте каву та шоколад. Разом
              - це спокій та щастя{" "}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Singnin;
