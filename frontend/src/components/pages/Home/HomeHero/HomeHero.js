import React from "react";
import StarLogo from "./StarLogo/StarLogo";
import mainFoto from "../../../../image/MainFoto2.jpg";
import ShopBtn from "../../../UI/Buttons/ShopBtn/ShopBtn";

const HomeHero = () => {
  return (
    <div className="HomeHero">
      <StarLogo />

      <div className="HomeHero-showcase">
        <div className="HomeHero-showcase-description">
          <div className="HomeHero-showcase-description-line"></div>
          <p>Речі які зроблені з любовю ! Напряму з сердця карпат.</p>
        </div>

        <div className='HomeHero-showcase-window'>
          <h2 className="HomeHero-showcase-window-title first">
            <strong>Любов</strong> яку можна відчути
          </h2>
          <div className="HomeHero-showcase-window-image-box">
            <img src={mainFoto} alt="mainImage" />
          </div>

          <h2 className="HomeHero-showcase-window-title second">На дотик</h2>
        </div>

        <ShopBtn to='/' text='Магазин' style='transparent' />
      </div>

      <p className="HomeHero-description">
        Привіт, я Наталя Шкарпетки для сну Для тих, хто мерзне Зв'яжу для дітей
        і дорослих Шкарпетки і не тільки
      </p>
    </div>
  );
};

export default HomeHero;
