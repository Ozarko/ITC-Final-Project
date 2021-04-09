import React from "react";
import SunLogo from "@UI/SunLogo/SunLogo";
import homeImage from "@image/home/Home.jpg";
import LogoDescription from "@UI/LogoDescription/LogoDescription";
import CircleBtn from "@UI/Buttons/CircleBtn/CircleBtn";
import { link } from "@routes/navigationLink";

const HomeHero = () => {
  
  return (
    <section className="HomeHero container">
      <SunLogo />
      <div className="HomeHero-showcase">
        <LogoDescription />
        <div className="HomeHero-showcase-window">
            <h2 className="HomeHero-showcase-window-title first">
              <strong>Любов</strong> яку можна відчути
            </h2>
          <div className="HomeHero-showcase-window-image-box">
            <img className='coverImage' src={homeImage} alt="mainImage" />
          </div>

          <h2 className="HomeHero-showcase-window-title second">На дотик</h2>
        </div>
        <CircleBtn
          text="Магазин"
          styleType="blackStyle transparent"
          linkType={{ type: "React", to: link.shop }}
        />
      </div>

      <p className="HomeHero-description">
        Привіт! Я - Наталя. <br /> Шкарпетки для Вас, Ваших рідних та наймиліших
        карапузиків у миті солодкого сну.
      </p>
    </section>
  );
};

export default HomeHero;
