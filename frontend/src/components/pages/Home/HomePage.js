import React, { useEffect, useState } from "react";
import TextLine from "@UI/TextLine/TextLine";
import Description from "./Description/Description";
import Follow from "./Follow/Follow";
import HomeHero from "./HomeHero/HomeHero";
import OurStory from "./OurStory/OurStory";
import { useSelector } from "react-redux";
import Loader from "../../UI/Loader/Loader";

const HomePage = () => {
  const [loader, setLoader] = useState(true)

  useEffect(()=> {
      setTimeout(()=> {
        setLoader(false)
      }, 1000)
  })

  return (
    <>
      <Loader loading={loader} />
      {!loader && (
        <section className="HomePage">
          <HomeHero />
          <TextLine />
          <Description />
          <OurStory />
          <div className="HomePage-baner" />
          <Follow />
        </section>
      )}
    </>
  );
};

export default HomePage;
