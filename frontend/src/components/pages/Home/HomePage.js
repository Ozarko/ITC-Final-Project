import React from "react";
import TextLine from "@UI/TextLine/TextLine";
import Description from "./Description/Description";
import Follow from "./Follow/Follow";
import HomeHero from "./HomeHero/HomeHero";
import OurStory from "./OurStory/OurStory";

const HomePage = () => {
  return (
    <div className="HomePage">
      <HomeHero />
      <TextLine />
      <Description />
      <OurStory />
      <div className="HomePage-baner" />
      <Follow />
    </div>
  );
};

export default HomePage;
