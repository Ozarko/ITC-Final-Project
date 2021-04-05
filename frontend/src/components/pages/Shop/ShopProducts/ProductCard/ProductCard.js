import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RectangleBtn from "@UI/Buttons/RectangleBtn/RectangleBtn";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../../../redux/actions/cart/cartActions";

const ProductCard = ({ product}) => {

  const [isInCart, setIsInCart] = useState(false)

  const dispatch = useDispatch()

  const { productInCart } = useSelector((state) => state.cart);
  useEffect(()=> {
    if (productInCart.some((item) => item.product === product._id)) {
      setIsInCart(true)
    }else {
      setIsInCart(false);
    }
  }, [productInCart, product])

  const addProduct = () => {
    if(product.countInStock !== 0) {
      dispatch(addProductToCart(product._id, 1)) 
    }
  }

  return (
    <div className="ProductCard">
      <Link to={`/product/${product._id}`}>
        <div className="ProductCard-image">
          <img
            src={product.image}
            alt={product.name}
            className="containImage"
          />
        </div>
        <h4 className="ProductCard-title">{product.name}</h4>
      </Link>
      <p>{product.description}</p>
      <div className="ProductCard-line"></div>
      <h5>{product.price} грн</h5>
      <RectangleBtn buttonText={isInCart? 'Уже в корзині' : "Купити"}  clickHandler={addProduct}/>
    </div>
  );
};

export default ProductCard;
