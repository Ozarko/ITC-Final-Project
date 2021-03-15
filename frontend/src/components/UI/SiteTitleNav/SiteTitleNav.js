import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { transleteName } from '../../../utilites/utilities'

const SiteTitleNav = ({match}) => {
  const path = match.path;
  const pathArr = path.split('/');

  return (
    <div className="SiteTitleNav">
      <ul>
        {pathArr.map((path, index) => {
          return (
            <li key={`SiteTitleNav-${index}`}>
              {index === 0 ? null : (
                <span className="SiteTitleNav-itemSlash">/</span>
              )}
              <Link to={`/${path}`}>
                {transleteName(path)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default withRouter(SiteTitleNav)

