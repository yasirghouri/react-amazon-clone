import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout__ad"
          alt=""
        />
        {basket?.length === 0 ? (
          <div className="checkout__title">
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add To Basket" button next to the item you want to buy.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item, idx) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  key={idx}
                  price={item.price}
                  title={item.title}
                  rating={item.rating}
                  image={item.image}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
