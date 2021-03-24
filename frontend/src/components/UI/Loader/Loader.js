import React from 'react'
import SunLogo from '../SunLogo/SunLogo';
import {rundomNumber} from '../../../utilites/utilities'
import { CSSTransition } from 'react-transition-group';
import { loaderTimeOut } from '../../../config/siteConfig';

const Loader = ({loading}) => {
  const descriptionText = ['Це перший милий текст', 'Це другий милий текст', 'Це третій милий текст']
  let currentDescriptionText = descriptionText[rundomNumber(0, descriptionText.length - 1)]

  return (
    <CSSTransition 
      in={loading}
      timeout={loaderTimeOut}
      mountOnEnter
      unmountOnExit
    >
      <div className="Loader">
        <SunLogo />
        <h1 className="Loader-title">SOCKGLAMUR</h1>
        <p>{currentDescriptionText}</p>
      </div>
    </CSSTransition>
  );
}

export default Loader
