import React from "react";
import MainLinkButton from "@UI/Buttons/MainLinkButton";

const OurStory = () => {
  return (
    <div className="OurStory">
      <div className="container">
        <div className="OurStory-title">
          <h2>Любов яку можна відчути</h2>
          <div className="OurStory-title-line"></div>
        </div>
        <div className="OurStory-description">
          <h3>
            Ми створюємо речі <br /> <span>які</span> дарують людям тепло <br />{" "}
            відчуття дому <span>та</span> щастя !
          </h3>
        </div>
        <div className="OurStory-box">
          <div className="OurStory-box-btn">
            <MainLinkButton
              text="Про Нас"
              styleType="lightBtn"
              linkType={{ type: "React", to: "/about" }}
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
    </div>
  );
};

export default OurStory;
