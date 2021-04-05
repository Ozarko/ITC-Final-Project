import React from "react";
import contactImage from "../../../image/contact/ContactUs.jpg";
import SunLogo from "../../UI/SunLogo/SunLogo";
import ContactForm from "./ContactForm/ContactForm";
import {IoIosPhonePortrait} from 'react-icons/io';
import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { LOCATION } from "../../../config/URL/socialURL";
import SeparatingLine from "../../UI/SeparatingLine/SeparatingLine";

const Contact = () => {
  return (
    <section className="Contact">
      <div className="container">
        <SunLogo />
        <div className="Contact-box">
          <div className="Contact-box-info">
            <h2>Раді вашим повідомленням !</h2>
            <ul className="Contact-box-info-list">
              <li>
                <IoIosPhonePortrait />{" "}
                <a href="tel:+380969748467">+380969748467</a>
              </li>
              <li>
                <AiOutlineMail />
                <a href="mailto:socksglamur@gmail.com">socksglamur@gmail.com</a>
              </li>
              <li>
                <GrLocation />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={LOCATION}
                >
                  м.Івано-Франківськ
                </a>
              </li>
            </ul>
            <SeparatingLine />
            <ContactForm />
          </div>
          <div className="Contact-box-image">
            <div className="Contact-box-image-frame cursorHoverEffect"></div>
            <img src={contactImage} alt="Contact title" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
