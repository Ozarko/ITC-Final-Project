import React from 'react'
import { CSSTransition } from 'react-transition-group'

const Loader = (loader) => {
  return (
    <CSSTransition
      in={loader}
      timeout={2000}
      classNames='Loader'
    >
      <div className="Loader">
        <h2>ТУТ БУДЕ ЛОАДЕР...</h2>
      </div>
    </CSSTransition>
  );
}

export default Loader
