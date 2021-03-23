import React from 'react'
import SunLogo from '../SunLogo/SunLogo';
import {rundomNumber} from '../../../utilites/utilities'

const Loader = () => {
  const descriptionText = ['Це перший милий текст', 'Це другий милий текст', 'Це третій милий текст']
  let currentDescriptionText = descriptionText[rundomNumber(0, descriptionText.length - 1)]

  return (
    <div className="Loader">
      <SunLogo/>
      <h1 className='Loader-title'>SOCKGLAMUR</h1>
      <p>{currentDescriptionText}</p>
    </div>
  );
}

export default Loader
