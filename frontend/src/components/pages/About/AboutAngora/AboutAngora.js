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
            Ангора. Трішки розкажу що це за пряжа. Її виготовляють з
            ангорського кролика з невеликим додаванням нитки- основи, щоб виріб
            був міцнішим. Вичісують двічі на рік і раз в рік стрижуть. 
            Довжина ворсу 6-12см, іноді 25-50 Кролик не виділяє шкірного жиру
            і тому пух дуже чистий. Волосинка кролика всередині порожня, тому
            пряжа з його пуху така легка і тепла.
          </p>
          <p>
            Речі зв'язані з
            високоякісної пряжі прослужать вам не один рік Має велику
            повітряпроникність, що дозволяє зберігати сухе тепло Одяг з
            ангори, не дивлячись на її легкість, дуже теплий Гіпоалергійність.
            Дуже рідко викликає алергію Вироби з ангори не можна прати в
            машині. Єдиний мінус, що шерстинки лізуть
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutAngora
