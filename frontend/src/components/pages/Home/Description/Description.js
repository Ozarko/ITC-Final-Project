import React from "react";
import ShopBtn from "../../../UI/Buttons/ShopBtn/ShopBtn";
import product from "../../../../image/product.jpg";
import product1 from "../../../../image/product1.jpg";

const Description = () => {
  return (
    <div className="Description">
      <div className="container">
        <div className="Description-header">
          <h2 className="Description-header-starttext">Речі</h2>
          <h2>
            <span className="Description-header-span">які</span> створюють
          </h2>
          <h2 className="Description-header-endtext">Радість</h2>
        </div>
        <div className="Description-box">
          <div className="Description-box-img first">
            <img src={product} alt="product" />
          </div>
          <div className="Description-box-content">
            <h3>
              Lorem Ipsum є псевдо- латинський текст використовується у веб -
              дизайні, типографіка, верстка, і друку замість англійської
              підкреслити елементи дизайну над змістом.
            </h3>
            <p>
              Lorem Ipsum є псевдо- латинський текст використовується у веб -
              дизайні, типографіка, верстка, і друку замість англійської
              підкреслити елементи дизайну над змістом.
            </p>
            <ShopBtn to="/" text="Магазин" style="standart" />
          </div>
          <div className="Description-box-img second">
            <img src={product1} alt="product1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
