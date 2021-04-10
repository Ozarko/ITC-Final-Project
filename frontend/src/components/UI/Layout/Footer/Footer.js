import React from "react";
import { Link } from "react-router-dom";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@config/URL/socialURL";
import { link } from "../../../../routes/navigationLink";

const Footer = () => {
    return (
      <footer className={"Footer"}>
        <div className="container">
          <div className="Footer-box">
            <div className="Footer-box-info">
              <div className="Footer-box-info-header">
                <div className="Footer-box-info-header-title">
                  <h5>Любов яку можна відчути </h5>
                </div>
                <div className="Footer-box-info-header-logo">
                  <Link to={link.main}>SocksGlamour</Link>
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
                      <Link to="/shop/some">Дитячий одяг</Link>
                    </li>
                    <li>
                      <Link to="/shop/someelse">В'язані вироби</Link>
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
                  Зона комфорту - ваше місце сили! Ви самі визначаєте її межі,
                  придумуєте правила і сортуєте запрошених. Займіться тим, про
                  що мрієте, що давно відкладаєте. Просто будьте собою! І будьте
                  щасливими!
                </p>
              </div>
            </div>
          </div>
          <div className="Footer-copyright">
            <h2>SocksGlamour &copy; 2021</h2>
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