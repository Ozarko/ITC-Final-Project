import React from 'react'
import SunLogo from '@UI/SunLogo/SunLogo';
import AboutAngoraImg from '@image/about/AboutAngora.jpg'
import FrameImage from '../../../UI/FrameImage/FrameImage';

const AboutAngora = () => {
  return (
    <section className="AboutAngora">
      <SunLogo />
      <div className="AboutAngora-box">
        <FrameImage image={AboutAngoraImg} alt={'angora rabbit photo'}/>
        <div className="AboutAngora-box-description">
          <h2>З якого матеріалу  <br/> виготовляються ваші мрії ?</h2>
          <p>
            Ангора. Її виготовляють з шерсті
            ангорського кролика з невеликим додаванням нитки- основи, щоб виріб
            був міцнішим. Кролик не виділяє шкірного жиру, тому пух дуже чистий.
            Шерстинка кролика всередині порожня - пряжа з його пуху така легка і тепла.
          </p>
          <p>
            Ангора гіпоалергенна. Вироби для дорослих та дітей є теплими, повітропроникними, мякими та пухнастими. 
          </p>
          <p>
            Superwash. Вовна спеціальної обробки, з якої виготовляють міцну шкарпеткову пряжу.
            Склад: 75% вовна, 25% ПА. Матеріал не звалюється, м'який та міцний. Шкарпетки стійкі до зношування.
            При правильному догляді гарантія до 10 років.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutAngora
