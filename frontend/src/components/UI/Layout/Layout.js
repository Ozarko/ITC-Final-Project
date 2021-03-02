import React from 'react'
import { menuLinks } from '../../../routes/navigationLink'
import Navigation from '../Navigation/Navigation'

const Layout = (props) => {
  return (
    <>
      {/* <Navigation menuLinks={menuLinks}/> */}
     <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout
