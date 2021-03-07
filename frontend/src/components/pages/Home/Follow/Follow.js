import React from "react";
import followImage from "@image/home/Follow.jpg";
import MainLinkButton from "@UI/Buttons/MainLinkButton";
import { INSTAGRAM_URL } from "@config/URL/socialURL";

const Follow = () => {
  return (
    <div className="Follow">
      <div className="Follow-box container">
        <h3>
          Підписуйся
          <br /> на наш Instagram
        </h3>
        <img src={followImage} alt="Слідкуй за нами в Instagram" />
        <div className="Follow-box-line"></div>
        <MainLinkButton
          styleType="lightBtn"
          text="Instagram"
          linkType={{ type: "Usual", url: `${INSTAGRAM_URL}` }}
        />
        <p>
          Підписуйся на нас в інстаграмі слідкуй за новинами та майстер класами
        </p>
      </div>
    </div>
  );
};

export default Follow;
