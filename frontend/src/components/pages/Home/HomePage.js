import React from 'react'
import TextLine from '../../UI/TextLine/TextLine'
import Description from './Description/Description'
import HomeHero from './HomeHero/HomeHero'

const HomePage = () => {
  return (
    <div className="HomePage">
      <HomeHero />
      <TextLine />
      <Description />
    </div>
  );
}

export default HomePage
