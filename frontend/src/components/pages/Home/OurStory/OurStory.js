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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              reiciendis veniam dignissimos quia sunt! Aut earum dicta
              temporibus
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              reiciendis veniam dignissimos quia sunt! Aut earum dicta
              temporibus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
