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
                <a href="tel:+380959100751">+380959100751</a>
              </li>
              <li>
                <AiOutlineMail />
                <a href="mailto:socksglamour@gmail.com">
                  socksglamour@gmail.com
                </a>
              </li>
              <li>
                <GrLocation />
                <a target="_blank" rel="noreferrer" href={LOCATION}>
                  м.Івано-Франківськ
                </a>
              </li>
            </ul>
            <SeparatingLine />
            <ContactForm />
          </div>
          <div className="Contact-box-frame">
            <div className="Contact-box-frame-line cursorHoverEffect"></div>
            <div className="Contact-box-frame-image">
              <img
                className="coverImage"
                src={contactImage}
                alt="Contact title"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
