import React from "react";
import { Link } from "react-router-dom";
import RectangleBtn from "@UI/Buttons/RectangleBtn/RectangleBtn";

const ProductCard = ({ product, index }) => {
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
      <RectangleBtn buttonText={"Купити"} />
    </div>
  );
};

export default ProductCard;
