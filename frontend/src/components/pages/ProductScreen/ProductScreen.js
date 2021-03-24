import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import LikeBtn from "@UI/Buttons/LikeBtn/LikeBtn";
import RectangleBtn from "@UI/Buttons/RectangleBtn/RectangleBtn";
import Quantity from "@UI/Quantity/Quantity";
import SiteTitleNav from "@UI/SiteTitleNav/SiteTitleNav";
import { link } from "../../../routes/navigationLink";
import SunLogo from "../../UI/SunLogo/SunLogo";
import { outOfStock } from "../../../utilites/utilities";
import { useDispatch, useSelector } from "react-redux";
import {productDetails} from '../../../redux/actions/productDetails/productDetailsAction'
import { addProductToCart } from "../../../redux/actions/cart/cartActions";

const ProductScreen = ({history, match }) => {
  
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()
  
  const {product} = useSelector((state) => state.productDetails);

  useEffect(()=> {
    dispatch(productDetails(match.params.id));
  }, [match, dispatch])

  const addToCard = () => {
    dispatch(addProductToCart(product, qty))
  } 

    return (
      <div className="ProductScreen">
        <div className="container">
            <SunLogo />
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
                  {/* {product.categories.join(' & ')} */}
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
                {outOfStock(!product.countInStock) ? (
                  <div className="ProductScreen-box-info-add-in-stock">
                    <p>
                      Нажаль, на даний момент товару немає в наявності!
                      <br />
                      Зв'яжіться з нами і ми обов'язково повідомимо вам про його
                      наявність !
                    </p>
                  </div>
                ) : (
                  <div className="ProductScreen-box-info-add-container">
                    <Quantity title="Придбати" inStock={product.countInStock} count={qty} clickHandler={setQty}/>
                    <RectangleBtn clickHandler={addToCard} buttonText={"В Кошик"} />
                    <LikeBtn />
                  </div>
                )}
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
};

export default ProductScreen;
