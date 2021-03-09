import React from "react";
import descriptionImage1 from "@image/home/description/descriptionImage1.jpg";
import descriptionImage2 from "@image/home/description/descriptionImage2.jpeg";

const Description = () => {
  return (
    <section className="Description">
      <div className="container">
        <h2 className="Description-title">
          Майстерня <br />
          шкарпеток з ангори<br />
          і не тільки ...
        </h2>
        <div className="Description-header">
          <h3>
            SOCKGLAMUR магазин - це майстерня, яка створює неймовірні речі, чаклуючи над якісними виробами, з натуральної пряжі (ангора, норка, вовна).
          </h3>
          <div className="Description-header-mission">
            <h3>Моє натхнення</h3>
            <p>
              Захоплююсь процесом чаклування над дивом, що народжується з кілометрів пухнастої нитки. Найбільше мені хочеться творити, нове, складне, красиве, не таке як у всіх. Люблю всіх, кому подобається в'язаний одяг, кого гріють мої вироби, хто цінує мою працю . 
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
    </section>
  );
};

export default Description;
