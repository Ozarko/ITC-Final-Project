import React, { useEffect, useState } from "react";
import TextLine from "@UI/TextLine/TextLine";
import Description from "./Description/Description";
import Follow from "./Follow/Follow";
import HomeHero from "./HomeHero/HomeHero";
import OurStory from "./OurStory/OurStory";
import { useSelector } from "react-redux";
import Loader from "../../UI/Loader/Loader";

const HomePage = () => {
  const [loader, setLoader] = useState(true);
  
  const firstLogin = localStorage.getItem("firstLogin");
  
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (firstLogin && !user.user.firstName) {
      setTimeout(() => {
        setLoader(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 1500);
    }
  }, [firstLogin, user.user.firstName]);

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
