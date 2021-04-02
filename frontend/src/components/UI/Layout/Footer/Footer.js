import React from "react";
import { Link } from "react-router-dom";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@config/URL/socialURL";
import { link } from "../../../../routes/navigationLink";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer-box">
          <div className="Footer-box-info">
            <div className="Footer-box-info-header">
              <div className="Footer-box-info-header-title">
                <p>Любов яку можна відчути </p>
              </div>
              <div className="Footer-box-info-header-logo">
                <Link to={link.main}>
                  SocksGlamour
                </Link>
              </div>
            </div>
            <div className="Footer-box-info-links">
              <div className="Footer-box-info-links-container">
                <h3>Магазин</h3>
                <ul>
                  <li>
                    <Link to="/shop/socks">Шкарпетки</Link>
                  </li>
                  <li>
                    <Link to="/shop/some">Одяг для дітей</Link>
                  </li>
                  <li>
                    <Link to="/shop/someelse">І щось там</Link>
                  </li>
                </ul>
              </div>
              <div className="Footer-box-info-links-container">
                <h3>Про нас</h3>
                <ul>
                  <li>
                    <Link to={link.about}>Про Нас</Link>
                  </li>
                  <li>
                    <Link to={link.contact}>Контакти</Link>
                  </li>
                  <li>
                    <Link to={link.paymentDetails}>Реквізити</Link>
                  </li>
                </ul>
              </div>
              <div className="Footer-box-info-links-container">
                <h3>Підтримка</h3>
                <ul>
                  <li>
                    <Link to={link.shippingAndReturns}>
                      Доставка та повернення
                    </Link>
                  </li>
                  <li>
                    <Link to={link.legalAndPrivacy}>Політика та правила</Link>
                  </li>
                  <li>
                    <Link to={link.trackAndOrders}>
                      Відслідковування замовлення
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Footer-box-info">
            <div className="Footer-box-info-social">
              <div></div>
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
            <div className="Footer-box-info-story">
              <p>
                Тут має бути якийсь мега мотивуючий і мілашний текст який буде
                підсумовувати основну суть роботи, в тому числі і мету роботи
                магазину або все таки треба буде реалізувати систему дисконту та
                підписок
              </p>
            </div>
          </div>
        </div>
        <div className="Footer-copyright">
          <h2>SockGlamur &copy; 2021</h2>
          <a
            href="https://www.linkedin.com/in/nazar-ozarko-90b542188/"
            target="_blank"
            rel="noreferrer"
          >
            Made by Ozarko
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;