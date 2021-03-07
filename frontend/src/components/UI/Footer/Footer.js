import React from "react";
import { Link } from "react-router-dom";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../../../config/URL/socialURL";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer-box">
          <div className="Footer-box-wrpr">
            <div className="Footer-box-wrpr-left">
              <div className="Footer-box-wrpr-left-top">
                <div className="Footer-box-wrpr-left-top-title">
                  <p>Любов яку можна відчути </p>
                </div>
                <div className="Footer-box-wrpr-left-top-logo">
                  <Link to="/">SocksGlamour</Link>
                </div>
              </div>
              <div className="Footer-box-wrpr-left-info">
                <div className="Footer-box-wrpr-left-info-container">
                  <h3>Магазин</h3>
                  <ul>
                    <li>
                      <Link to="/shop/socks">Шкарпетки</Link>
                    </li>
                    <li>
                      <Link to="/shop/some">Ще щось там</Link>
                    </li>
                    <li>
                      <Link to="/shop/someelse">І щось там</Link>
                    </li>
                  </ul>
                </div>
                <div className="Footer-box-wrpr-left-info-container">
                  <h3>Про нас</h3>
                  <ul>
                    <li>
                      <Link to="/about">Про Нас</Link>
                    </li>
                    <li>
                      <Link to="/contact">Контакти</Link>
                    </li>
                    <li>
                      <Link to="/details">Реквізити</Link>
                    </li>
                  </ul>
                </div>
                <div className="Footer-box-wrpr-left-info-container">
                  <h3>Підтримка</h3>
                  <ul>
                    <li>
                      <Link to="/shipping&returns">Доставка та повернення</Link>
                    </li>
                    <li>
                      <Link to="/legal&privacy">Політика та правила</Link>
                    </li>
                    <li>
                      <Link to="/track&orders">
                        Відслідковування замовлення
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Footer-box-wrpr-right">
              <div className="Footer-box-wrpr-right-social">
                <div></div>
                <a href={FACEBOOK_URL}>Facebook</a>
                <a href={INSTAGRAM_URL}>Instagram</a>
              </div>
              <div className="Footer-box-wrpr-right-story">
                <p>
                  Тут має бути якийсь мега мотивуючий і мілашний текст який буде
                  підсумовувати основну суть роботи, в тому числі і мету роботи
                  магазину або все таки треба буде реалізувати систему дисконту та підписок
                </p>
              </div>
            </div>
          </div>
          <div className="Footer-box-copyright">
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
      </div>
    </footer>
  );
};

export default Footer;