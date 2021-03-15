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
              пам'ятаю, в'язала завжди і скрізь. Що я тільки не в'язала: від
              шапок до пальто, від серветок до іграшок. Завжди цікаво вчитися
              чомусь новому.
            </p>
            <p>
              В дитинстві це здавалось якоюсь магією. Мама швиденько перебирала
              спицями чи гачком. Клубок бігав по дивану. А за кілька днів я мала
              нову кофтинку. Ну, звісно ж, я хотіла так само. Тому, скільки себе
              пам'ятаю, в'язала завжди і скрізь. Що я тільки не в'язала: від
              шапок до пальто, від серветок до іграшок. Завжди цікаво вчитися
              чомусь новому.
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
