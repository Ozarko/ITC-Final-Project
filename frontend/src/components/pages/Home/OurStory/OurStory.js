import React from "react";
import CircleBtn from "@UI/Buttons/CircleBtn/CircleBtn";
import {link} from '../../../../routes/navigationLink';

const OurStory = () => {
  return (
    <section className="OurStory">
      <div className="container">
        <div className="OurStory-title">
          <h2>Любов яку можна відчути</h2>
          <div className="OurStory-title-line"></div>
        </div>
        <div className="OurStory-description">
          <h3>
            Я створюю речі <br /> <span>які</span> дарують тепло, затишок
            <br /> відчуття дому <span>та</span> щастя !
          </h3>
        </div>
        <div className="OurStory-box">
          <div className="OurStory-box-btn">
            <CircleBtn
              text="Про Нас"
              styleType="lightBtn"
              linkType={{ type: "React", to: link.about }}
            />
          </div>
          <div className="OurStory-box-description">
            <p>
              Неможливо змінити погоду за вікном. Але можливо створити собі залишок вдома. Улюблені речі, турбота ближнього, тепло відчуттів - це все прикрашає наш внутрішній світ.
            </p>
            <p>
              Щасливу людину дуже просто впізнати. Вона ніби випромінює ауру спокою і тепла. Секрет щасливих людей простий - це відсутність напруги. Це задоволення собою. Огортаючи ніжки пухнастими шкарпеточками, ви отримуєте теало. Додайте каву та шоколад. Разом - це спокій та щастя !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
