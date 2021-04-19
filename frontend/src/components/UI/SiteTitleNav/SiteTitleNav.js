import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { transleteName } from '../../../utilites/utilities'

const SiteTitleNav = ({match, name}) => {
  const path = match.path;
  const pathArr = path.split('/');

  return (
    <nav className="SiteTitleNav">
      <ul>
        {pathArr.map((path, index) => {
          return (
            <li key={`SiteTitleNav-${index}`}>
              {index === 0 ? null : <span>/</span>}
              {index < 2 ? (
                <Link to={`/${path === "product" ? "shop" : path}`}>
                  {transleteName(path)}
                </Link>
              ) : (
                <p className="cursorHoverEffect">{name}</p>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default withRouter(SiteTitleNav)

