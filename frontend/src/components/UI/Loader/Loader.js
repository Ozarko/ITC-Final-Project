import React from "react";
import SunLogo from "../SunLogo/SunLogo";
import { rundomNumber } from "../../../utilites/utilities";
import { CSSTransition } from "react-transition-group";
import { loaderTimeOut } from "../../../config/siteConfig";
import { useState } from "react";
import { useEffect } from "react";

const Loader = ({ loading }) => {

  const [cuurentText, setCurrentText] = useState(1)

  const descriptionText = [
    "Обгорнувшись тишею й теплом, можна мріяти навіть у погану погоду.",
    "Живіть сьогодні й зараз, не відкладайте нічого на завтра.",
    "Багато що лікується людським теплом, обіймами і добрими словами...",
  ];

  useEffect(() => {
    setCurrentText(rundomNumber(0, descriptionText.length - 1));
  }, [descriptionText.length]);


  return (
    <CSSTransition
      in={loading}
      timeout={loaderTimeOut}
      classNames="load"
      mountOnEnter
      unmountOnExit
    >
      <div className="Loader">
        <SunLogo />
        <h1 className="Loader-title">SOCKGLAMOUR</h1>
        <p>{descriptionText[cuurentText]}</p>
      </div>
    </CSSTransition>
  );
};

export default Loader;
