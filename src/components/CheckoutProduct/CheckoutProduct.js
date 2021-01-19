import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../context/StateProvider";

const CheckoutProduct = ({ title, id, image, rating, price }) => {
  const [, dispatch] = useStateValue();
  const removeFromBasketHandler = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <p key={i}>
                  <StarIcon className="checkoutProduct__ratingStar" />
                </p>
              );
            })}
        </div>
        <button
          onClick={removeFromBasketHandler}
          className="checkoutProduct__button"
        >
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
