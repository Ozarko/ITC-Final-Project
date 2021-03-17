import React from 'react'
import { Link } from 'react-router-dom';
import LikeBtn from '@UI/Buttons/LikeBtn/LikeBtn';
import RectangleBtn from '@UI/Buttons/RectangleBtn/RectangleBtn';
import Quantity from '@UI/Quantity/Quantity';
import SiteTitleNav from '@UI/SiteTitleNav/SiteTitleNav';
import products from './../../../products';
import { link } from '../../../routes/navigationLink';
import SunLogo from '../../UI/SunLogo/SunLogo';

const ProductScreen = ({match}) => {
  const product = products.find(product => product._id === match.params.id);
  return (
    <div className="ProductScreen">
      <div className="container">
        <SunLogo/>
        <SiteTitleNav name={product.name} />
        <div className="ProductScreen-box">
          <div className="ProductScreen-box-image">
            <img
              className="containImage"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="ProductScreen-box-info">
            <div className="ProductScreen-box-info-details">
              <h5 className="ProductScreen-box-info-details-categories">
                {product.categories.join(" & ")}
              </h5>
              <h4 className="ProductScreen-box-info-details-name">
                {product.name}
              </h4>
              <p className="ProductScreen-box-info-details-description">
                {product.description}
              </p>
              <h5 className="ProductScreen-box-info-details-price">
                {product.price} грн
              </h5>
            </div>
            <div className="ProductScreen-box-info-add">
              <Quantity title="Придбати" count={"2"} />
              <RectangleBtn buttonText={"В Кошик"} />
              <LikeBtn />
            </div>
            <div className="ProductScreen-box-info-footer">
              <ul className="ProductScreen-box-info-footer-links">
                <li>
                  <Link to={link.productDetailes}>Деталі Продукту</Link>
                </li>
                <li>
                  <Link to={link.shippingAndReturns}>
                    Доставка та повернення
                  </Link>
                </li>
                <li className="ProductScreen-box-info-footer-links">
                  <Link
                    className="recommendation"
                    to={link.recommendationForCare}
                  >
                    Рекомендації по догляду
                  </Link>
                </li>
              </ul>
              <p>
                Щасливу людину дуже просто впізнати. Вона ніби випромінює ауру
                спокою і тепла. Секрет щасливих людей простий - це відсутність
                напруги. Це задоволення собою. Огортаючи ніжки пухнастими
                шкарпеточками, ви отримуєте теало. Додайте каву та шоколад.
                Разом - це спокій та щастя !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen
