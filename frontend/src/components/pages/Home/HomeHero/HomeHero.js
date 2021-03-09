import React from "react";
import SunLogo from "./SunLogo/SunLogo";
import homeImage from "@image/home/Home.jpg";
import MainLinkButton from "@UI/Buttons/MainLinkButton";

const HomeHero = () => {
  return (
    <section className="HomeHero container">
      <SunLogo />

      <div className="HomeHero-showcase">
        <div className="HomeHero-showcase-description">
          <div className="HomeHero-showcase-description-line"></div>
          <p>Речі зроблені з натхненням <br/> Любов з серця Карпат.</p>
        </div>

        <div className="HomeHero-showcase-window">
          <h2 className="HomeHero-showcase-window-title first">
            <strong>Любов</strong> яку можна відчути
          </h2>
          <div className="HomeHero-showcase-window-image-box">
            <img src={homeImage} alt="mainImage" />
          </div>

          <h2 className="HomeHero-showcase-window-title second">На дотик</h2>
        </div>

        <MainLinkButton
          text="Магазин"
          styleType="blackStyle transparent"
          linkType={{ type: "React", to: "/" }}
        />
      </div>

      <p className="HomeHero-description">
        Привіт! Я - Наталя. <br/> Шкарпетки для Вас, Ваших рідних та наймиліших карапузиків у миті солодкого сну.
      </p>
    </section>
  );
};

export default HomeHero;
