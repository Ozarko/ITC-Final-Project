import React from "react";
import SunLogo from "./SunLogo/SunLogo";
import ShopBtn from "../../../UI/Buttons/ShopBtn/ShopBtn";
import homeImage from '../../../../image/home/Home.jpg';

const HomeHero = () => {
  return (
    <div className="HomeHero">
      <SunLogo />

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
            <img src={homeImage} alt="mainImage" />
          </div>

          <h2 className="HomeHero-showcase-window-title second">На дотик</h2>
        </div>

        <ShopBtn to='/' text='Магазин' styleType='transparent' />
      </div>

      <p className="HomeHero-description">
        Привіт, я Наталя Шкарпетки для сну Для тих, хто мерзне Зв'яжу для дітей
        і дорослих Шкарпетки і не тільки
      </p>
    </div>
  );
};

export default HomeHero;
