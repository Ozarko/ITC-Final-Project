import React from "react";
import followImage from "@image/home/Follow.jpg";
import { INSTAGRAM_URL } from "@config/URL/socialURL";
import FrameImage from "../../../UI/FrameImage/FrameImage";
import CircleBtn from "../../../UI/Buttons/CircleBtn/CircleBtn";

const Follow = () => {
  return (
    <section className="Follow">
      <div className="Follow-box container">
        <h3>
          Підписуйся
          <br /> на наш Instagram
        </h3>
        <FrameImage image={followImage} alt="follow image" />
        <CircleBtn
          styleType="lightBtn"
          text="Instagram"
          linkType={{ type: "Usual", url: `${INSTAGRAM_URL}` }}
        />
        <p>
          Підписуйся на нас в інстаграмі слідкуй за новинами та майстер класами
        </p>
      </div>
    </section>
  );
};

export default Follow;
