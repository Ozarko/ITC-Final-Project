import React, { useEffect, useState } from "react";
import { loaderTimeOut } from "../../../config/siteConfig";
import Loader from "../../UI/Loader/Loader";
import AboutAngora from "./AboutAngora/AboutAngora";
import AboutTitle from "./AboutTitle/AboutTitle";

const About = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, loaderTimeOut);
  }, [loader]);

  return (
    <>
      <Loader loading={loader} />
      {!loader && (
        <section className="About">
          <div className="container">
            <AboutTitle />
            <AboutAngora />
          </div>
        </section>
      )}
    </>
  );
};

export default About;
