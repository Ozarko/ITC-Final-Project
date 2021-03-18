import React from 'react';
import aboutImage from '@image/about/about-desc.jpg';
import aboutSecondImage from '@image/about/aboutImageS.jpg';

const AboutTitle = () => {
  return (
    <section className="AboutTitle">
      <div className="AboutTitle-header">
        <h2>
          Про мене <br /> <span>та</span> мою майстерню <br /> <span>в</span>{" "}
          декількох словах
        </h2>
        <div className="AboutTitle-header-description">
          <div className="AboutTitle-header-description-text">
            <p>
              В дитинстві це здавалось якоюсь магією. Мама швиденько перебирала
              спицями чи гачком. Клубок бігав по дивану. А за кілька днів я мала
              нову кофтинку. Ну, звісно ж, я хотіла так само. Тому, скільки себе
              пам'ятаю (мабуть років з восьми), в'язала завжди і скрізь. 
              На перервах і на уроках, в парку на лавочках і в черзі до лікаря
              їдучи в автобусі ...
            </p>
            <p>
              Здається, що я в'язала уже все ... Проте з'являються нові фасони,
              нова пряжа, нові техніки в'язання... Ніколи не зупиняюсь на досягнутому - вчитись 
              новому завжди цікаво. Я просто щаслива, коли бачу, що ви носите мої вироби, коли ви 
              задоволені результатами моєї праці.<br/> Це окриляє !
            </p>
          </div>
          <div className="AboutTitle-header-description-image">
            <img src={aboutImage} alt="" />
          </div>
        </div>
      </div>
      <div className="AboutTitle-imageBox">
        <img src={aboutSecondImage} alt="" />
      </div>
    </section>
  );
}

export default AboutTitle
