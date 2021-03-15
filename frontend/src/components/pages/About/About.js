import React from 'react'
import AboutAngora from './AboutAngora/AboutAngora'
import AboutTitle from './AboutTitle/AboutTitle'

const About = () => {
  return (
    <section className="About">
      <div className="container">
        <AboutTitle />
        <AboutAngora />
      </div>
    </section>
  );
}

export default About
