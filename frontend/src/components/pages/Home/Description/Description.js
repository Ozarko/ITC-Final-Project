import React from "react";
import descriptionImage1 from "../../../../image/home/description/descriptionImage1.jpg";
import descriptionImage2 from "../../../../image/home/description/descriptionImage2.jpeg";

const Description = () => {
  return (
    <div className="Description">
      <div className="container">
        <h2 className="Description-title">
          Майстерня <br />
          мягеньких Ангорових <br />
          шкарпеток
        </h2>
        <div className="Description-header">
          <h3>
            SOCKGLAMUR магазин це майстерня яка виготовляє якісні вироби з
            натуральної пряжі ангорського кролика з невеликим додаванням нитки-
            основи
          </h3>
          <div className="Description-header-mission">
            <h3>Моє натхнення</h3>
            <p>
              Найбільша нагорода для мене, це коли кажуть "я постійно ношу твою
              кофту ( плаття, шапку і т.д). Найбільше, що мені хочеться, це
              творити. Щось нове, складне, красиве і щоб не таке, як у всіх.
              ♥️Люблю вас усіх, хто цінує мою працю. Кого гріють мої речі. Кому
              просто подобається в'язаний одяг.
            </p>
          </div>
        </div>
        <div className="Description-image">
          <img
            className="containImage first"
            src={descriptionImage2}
            alt="ddd"
          />
          <img
            className="containImage second"
            src={descriptionImage1}
            alt="ddd"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
