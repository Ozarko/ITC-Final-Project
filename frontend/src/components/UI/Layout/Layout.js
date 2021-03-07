import React from 'react'
import { menuLinks } from '@routes/navigationLink'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

const Layout = (props) => {
  return (
    <>
      <Navigation menuLinks={menuLinks}/>
      
      <main>
        {props.children}
      </main>

      <Footer/>
    </>
  )
}

export default Layout
