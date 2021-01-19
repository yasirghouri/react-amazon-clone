import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../context/StateProvider";

const Product = ({ id, title, image, rating, price }) => {
  const [, dispatch] = useStateValue();
  const addToBasketHandler = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        rating,
        price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <p key={i}>
                  <StarIcon className="product__ratingStar" />
                </p>
              );
            })}
        </div>
      </div>
      <img src={image} className="product__image" alt="" />
      <button onClick={addToBasketHandler} className="product__button">
        Add To Basket
      </button>
    </div>
  );
};

export default Product;
