import React from "react";
import SunLogo from "../SunLogo/SunLogo";
import { rundomNumber } from "../../../utilites/utilities";
import { CSSTransition } from "react-transition-group";

const Loader = ({ loading }) => {
  const descriptionText = [
    "Обгорнувшись тишею й теплом, можна мріяти навіть у погану погоду.",
    "Живіть сьогодні й зараз, не відкладайте нічого на завтра.",
    "Багато що лікується людським теплом, обіймами і добрими словами...",
  ];
  let currentDescriptionText =
    descriptionText[rundomNumber(0, descriptionText.length - 1)];

  return (
    <CSSTransition
    in={loading}
    timeout={5000}
    classNames="load"
    mountOnEnter
    unmountOnExit
  >
      <div className="Loader">
          <SunLogo />
          <h1 className="Loader-title">SOCKGLAMOUR</h1>
          <p>{currentDescriptionText}</p>
      </div>
    </CSSTransition>
  );
};

export default Loader;
